
const http = require("http");

const server =
    http.createServer( async (req, res) => {

        if (req.url === "/api") {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
                const data = await response.json();

                res.statusCode = 200;
                res.setHeader("Content-type", "application/json")
                res.end(JSON.stringify(data));
            } catch ( e ) {
                res.statusCode = 500;
                res.end("API failed due to:" + e.message)
            }

        } else {
            res.statusCode = 404;
            res.end("not found");
        }

    });

server.listen( 3000, () => {
    console.log("server is running on http://localhost:3000");
});
