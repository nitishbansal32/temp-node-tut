const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

//defualt is to overwrite the file
//so we add flag to add instead of overwrite

writeFileSync(
    "./content/result-sync.txt",
    `Hey this is my ${first} and ${second} file texts`,
    { flag: "a" }
);

console.log("done with task");
console.log("starting new task");
