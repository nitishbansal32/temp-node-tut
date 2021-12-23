const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("hello this is home page");
    }
    if (req.url === "/about") {
        res.end("This is the about section");
    }
    res.send("This is the about section");
});

server.listen(5500);
