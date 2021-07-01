import axios from "axios";
import { existsSync, mkdirSync } from "fs";
import { readFile, writeFile } from "fs/promises";
import { JSDOM } from "jsdom";
import TurndownService from "turndown";
import plugins from "turndown-plugin-gfm";

const td = new TurndownService({ codeBlockStyle: "fenced" });
td.use(plugins.gfm);
td.addRule("strong", {
  filter: ["strong"],
  replacement: function (content) {
    return "**" + content + "**";
  },
});
td.addRule("code", {
  filter: ["code"],
  replacement: function (content) {
    return "```js\n" + content + "\n```";
  },
});
td.addRule("a", {
  filter: ["a"],
  replacement: function (content) {
    return "{@link " + content + "}";
  },
});

const f = f => Array.from(f).filter(a => a.nodeType === 1);

class Link {
  constructor(a) {
    this.name = a.textContent.trim();
    this.url = a.getAttribute("href");
  }
}

class Param {
  constructor(name = "", type = "", description = "", optional = null) {
    this.name = name;
    this.type = type;
    this.description = description;
    this.optional = optional;
    if (optional == null) delete this.optional;
  }
  static from(element) {
    return new Param(...f(element.children).map(a => a.textContent.trim()));
  }
}

class Property {
  constructor(name = "", type = "", description = "", readonly = false) {
    this.name = name;
    this.type = type;
    this.description = description;
    this.readonly = readonly;
  }
  static from(element) {
    let [name, type, description] = f(element.children).map(a =>
      a.textContent.trim()
    );
    let readonly = false;
    if (description.startsWith("read only")) {
      readonly = true;
      description = description.slice(10);
    }
    return new Property(name.match(/\w+/)[0], type, description, readonly);
  }
}

class Method {
  constructor(name = "", description = "", params = [], returns = "") {
    this.name = name;
    this.description = description;
    this.params = params;
    this.returns = returns;
  }
  static from(declaration) {
    let ret = [];
    let current = declaration;
    let making = new Method();
    let stage = 0;
    while (current?.nextElementSibling) {
      let nextStage = stage;
      switch (current.tagName.toLowerCase()) {
        case "h3":
          if (stage > 0) {
            ret.push(making);
            making = new Method();
          }
          making.name = /.+\.(.+)\(.+/.exec(current.textContent.trim())[1];
          if (making.name.includes(".") || making.name.includes("("))
            console.error(current.textContent.trim(), "=>", making.name);
          nextStage = 1;
          break;
        case "blockquote":
          // Done in stage == 1 at the bottom
          break;
        case "p":
          if (current.textContent.includes("does not have any functions"))
            return [];
          if (current.textContent.startsWith("returns:")) {
            making.returns = f(current.children)[1].textContent;
            nextStage = 2;
          }
          break;
        case "table":
          if (stage === 2)
            making.params = f(f(current.children)[1].children).map(Param.from);
          break;
        default:
          break;
      }

      if (stage === 1)
        making.description +=
          td.turndown(
            current.innerHTML
              .trim()
              .replace("<thead>", "<table><thead>")
              .replace("</tbody>", "</tbody></table>")
          ) + "\n";
      stage = nextStage;
      current = current.nextElementSibling;
    }
    if (making.name) ret.push(making);
    return ret;
  }
}

class Constructor {
  constructor(params) {
    this.params = params;
  }
  static from(mdcontainer) {
    const constructor = Array.from(mdcontainer.children).find(
      a => a.textContent === "Constructor"
    );
    if (constructor == null) return null;
    let params = constructor.nextElementSibling.textContent
      .trim()
      .match(/new .+\((.+)\)/);
    if (params == null) return null;
    params = params[1].split(", ").map(a => {
      let paramInfo = a.split(" ").reverse();
      return new Param(...paramInfo);
    });
    for (let li of constructor.nextElementSibling.nextElementSibling.children) {
      let text = li.textContent
        .trim()
        .slice(li.firstElementChild.textContent.trim().length + 1)
        .trim();
      if (text.startsWith("optional")) {
        text = text.slice(8);
        params.find(
          a => a.name === li.firstElementChild.textContent.trim()
        ).optional = true;
      }
      params.find(
        a => a.name === li.firstElementChild.textContent.trim()
      ).description = text.trim();
    }
    return new Constructor(params);
  }
}

class Flags {
  constructor(no = [], yes = []) {
    this.no = no;
    this.yes = yes;
  }
  static from(features) {
    if (features.length === 0) return null;
    return new Flags(
      features
        .filter(a => a.classList.contains("feature-disabled"))
        .map(a => a.textContent.trim().split("\n")[0]),
      features
        .filter(a => a.classList.contains("feature-enabled"))
        .map(a => a.textContent.trim().split("\n")[0])
    );
  }
}

class Document {
  constructor(
    name = "",
    description = "",
    properties = [],
    methods = [],
    flags = null,
    constructor = null
  ) {
    this.name = name;
    this.description = description;
    /**
     * @type {Array<Property>}
     */
    this.properties = properties;
    /**
     * @type {Array<Method>}
     */
    this.methods = methods;
    this.flags = flags;
    if (flags == null) delete this.flags;
    this.constructor = constructor;
    if (constructor == null) delete this.constructor;
  }
  static from(document) {
    const description = document.querySelector(".md-container > blockquote");
    const properties = document.querySelector(".md-container > table > tbody");
    const flags = document.querySelectorAll(".md-container > .feature");
    return new Document(
      document.querySelectorAll("h1")[1].firstChild.textContent.trim(),
      description == null ? "" : description.textContent.trim(),
      properties == null
        ? []
        : Array.from(properties.children).map(Property.from),
      Method.from(
        Array.from(document.querySelector(".md-container").children).find(
          a => a.textContent.trim() == "Functions"
        )
      ),
      Flags.from(Array.from(flags)),
      Constructor.from(document.querySelector(".md-container"))
    );
  }
}

const get = async url => {
  const filename = new URL(url).pathname;
  if (existsSync("./cache" + filename + ".html"))
    return await readFile("./cache" + filename + ".html");
  else {
    const data = (await axios.get(url)).data;
    mkdirSync("./cache/" + filename.split("/").slice(0, -1).join("/"), {
      recursive: true,
    });
    await writeFile("./cache" + filename + ".html", data.toString());
    return data.toString();
  }
};
const parse = html => new JSDOM(html).window.document;
const gethtml = async url => parse(await get(url));

export { Link, Document, Param, Method, Property, Flags, get, parse, gethtml };
