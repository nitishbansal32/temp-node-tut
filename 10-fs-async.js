const { readFile, writeFile } = require("fs");

//using console statements to show diff between sync and async

console.log("start");

readFile("./content/first.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile("./content/second.txt", "utf8", (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            "./content/result-async.txt",
            `result is ${first},${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log("done with task");
            }
        );
    });
});

console.log("starting next task");
