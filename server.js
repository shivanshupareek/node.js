const http = require("http");
const fs = require("fs");
const path = require("path");

const server =
    http.createServer((req, res) => {
        if (req.url === "/message") {
            const filePath = path.join(__dirname, "message.txt");
            const data = fs.readFileSync(filePath, "utf-8" );
            res.end(data);
        } else {
            res.end("oop, nothing to see here");
        }
})

server.listen (3000, () => {
    console.log("Server running on http://localhost:3000");
});
