var http = require("http");
var express = require("express");
var app = express();


app.use((request, response, next) => {
    console.log("Ya Rasool Allah");
    next();
})
app.use((request, response, next) => {
    var minutes =(new Date()).getMinutes();
    if ((minutes % 2) === 0) {
        next();
    } else {
        response.send("it is Authorized not")
    }
})
app.use((request, response) => {
    response.end("that is ");
})
http.createServer(app).listen(8080);








// ejs work of this sunday mean 23-07-2017
// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(8081);
console.log('8080 is the magic port');
