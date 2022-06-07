const http = require("http");
const port = 8080;
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url == "/image") {
        fs.readFile("./lord.png", (err, data) => {                      //if a client is requesting for a picture
            if (err) {
                res.writeHead(404)
                res.write("Could not get image");
                res.end();
            } else {
                res.writeHead(200, { "Content-type": "image/png" });
                res.write(data);
                res.end();
            }

        })
    } else if (req.url == "/video") {
        fs.readFile("./videoplayback.mp4", (err, data) => {                      //if a client is requesting for a video
            if (err) {
                res.writeHead(404)
                res.write("Could not get video");
                res.end();
            } else {
                res.writeHead(200, { "Content-type": "video/mp4" });
                res.write(data);
                res.end();
            }

        })
    }
    else {
        res.write("Home Page");
        res.end();
    }
});

server.listen(port, () => {
    console.log(`server started running on port ${port}`)
}) 