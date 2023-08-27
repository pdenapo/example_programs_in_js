import { readFileSync } from "node:fs";

console.log(readFileSync("test.json", { encoding: "utf8" }));
