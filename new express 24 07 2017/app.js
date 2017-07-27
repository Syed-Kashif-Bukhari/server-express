var express = require("express");
var http = require("http");
var app = express();
app.use(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.send("Ya Nabi Salam Alaika");
});

http.createServer(app).listen(3000);
