import {
  appendFileSync,
  closeSync,
  openSync,
  unlinkSync,
  writeFileSync,
} from "fs";
import { fileURLToPath } from "url";
import { Document, gethtml, Link } from "./utils.js";

const genDocs = async () =>
  Promise.all(
    Array.from(
      (await gethtml("http://just-cause.mp/docs"))
        .querySelector(".container.docs-container")
        .querySelectorAll("ul")
    )
      .filter(a => a.classList.length == 0)
      .map(a => Array.from(a.querySelectorAll("a")))
      .flat()
      .map(a => new Link(a))
      .map(async link => Document.from(await gethtml(link.url)))
  );

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const docs = await genDocs();
  writeFileSync("./docs/docs.json", JSON.stringify(docs, null, 2));
  try {
    unlinkSync("./docs/docs.js");
  } catch (e) {}
  const outfile = openSync("./docs/docs.js", "a");
  let exports = docs.map(doc => doc.name);
  for (let doc of docs) {
    appendFileSync(
      outfile,
      `\n
/**
 * @class
 * ${doc.description}
 */
var ${(doc.flags?.yes.includes("Instance") ? "___" : "") || ""}${
        doc.name
      } = class {
  /**
   * @constructor
   * ${doc?.flags?.no.includes("Constructible") ? "@hideconstructor" : ""}
   * ${
     doc.constructor?.params
       ?.map(a => `@param {${a.type}} ${a.name} - ${a.description}`)
       .join("\n\t * ") || ""
   }
  */
  constructor(${doc.constructor?.params?.map(a => a.name).join(",") || ""}){
  ${doc.properties
    .map(
      a => `
    /**
     * @type {${a.type}}
     */
    this.${a.name} = null;`
    )
    .join("\n")}
  }
  ${doc.methods
    .map(
      a => `
  /**
   * ${a.description.replace(/\n/g, "\n\t * \n\t * ")}\n
   * ${
     a.params
       ?.map(a => `@param {${a.type}} ${a.name} - ${a.description}`)
       .join("\n\t * ") || ""
   }
   * @returns {${a.returns}}
   */
  ${a.name}(${a.params.map(a => a.name).join(",")}){}`
    )
    .join("\n")}
}


${
  (doc.flags?.yes.includes("Instance")
    ? `/** @type ___${doc.name} */
var ${doc.name} = new ___${doc.name}();`
    : "") || ""
}`.replace(/\n\s*\n/g, "\n")
    );
  }
  appendFileSync(
    outfile,
    `\nObject.assign(global, {${exports.join(", ")}});\nexport {${exports.join(
      ", "
    )}};`
  );
  closeSync(outfile);
}
export { genDocs };
