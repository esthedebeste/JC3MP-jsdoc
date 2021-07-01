import { strict as assert } from "assert";
import { genDocs } from "./make.js";
import { Flags, Method, Param, parse, Property } from "./utils.js";

//  const prec4 = number => parseFloat(number.toPrecision(4));

function Test(name, prep, executor, checker, logger, transform) {
  this.name = name;
  if (prep == null) this.prep = () => {};
  else this.prep = prep;
  this.execute = executor;
  this.check = checker;
  this.logger = logger || console.log;
  this.transform = transform || (a => a);
}

/** @type {Array<Test>} */
const tests = [];

tests.push(
  new Test(
    "Correctly parses HTML",
    null,
    () => parse("<html><head></head><body>Test</body><html>").body.textContent,
    "Test"
  )
);

tests.push(
  new Test(
    "Doesn't mind faulty HTML",
    null,
    () => parse("Test").body.textContent,
    "Test"
  )
);

let docs;
tests.push(
  new Test(
    "Generating docs for tests",
    async () => (docs = await genDocs()),
    () => 1,
    1,
    () => console.log("\x1b[32mDone!")
  )
);

tests.push(
  new Test(
    "Generates properties correctly",
    null,
    () => docs[90].properties[0],
    new Property(
      "client",
      "RemoteClient",
      "the Client that disconnected",
      false
    ),
    undefined,
    a => a.name
  )
);

tests.push(
  new Test(
    "Generates methods correctly",
    null,
    () => docs[8].methods[3],
    new Method(
      "LookAt",
      "",
      [
        new Param("p1", "Vector3f", ""),
        new Param("p2", "Vector3f", ""),
        new Param("p3", "Vector3f", ""),
      ],
      "Matrix"
    ),
    undefined,
    a => a.name
  )
);

tests.push(
  new Test(
    "Generates flags correctly",
    null,
    () => docs[72].flags,
    new Flags(["Constructible", "Custom Properties"], ["Auto Destroy"]),
    undefined,
    a => a.no[0]
  )
);

let maxlength = 0;
for (let test of tests)
  if (test.name.length > maxlength) maxlength = test.name.length;
maxlength += 2;
for (let test of tests) {
  process.stdout.write("\x1b[37m" + (test.name + ": ").padEnd(maxlength));
  let prep = test.prep();
  if (prep instanceof Promise) prep = await prep;

  let failedMessage;
  let run;
  try {
    run = test.execute(prep);
    if (run instanceof Promise) run = await run;
  } catch (error) {
    failedMessage = error;
  }

  let successMessage;
  if (!failedMessage)
    try {
      let tested = test.check;
      if (tested instanceof Function) tested = tested(prep);
      if (tested instanceof Promise) tested = await tested;
      assert.deepEqual(run, tested);
      successMessage =
        "! " + test.transform(run) + " is " + test.transform(tested);
    } catch (error) {
      failedMessage = error;
    }
  if (failedMessage)
    console.error("\x1b[31mfailed.", "\n", failedMessage, "\n", prep);
  else test.logger("\x1b[32mSuccess" + successMessage + "!");
}
console.log("\x1b[0m");
