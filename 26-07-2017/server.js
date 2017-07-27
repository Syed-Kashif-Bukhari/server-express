var express = require("express");
var app = express();
app.get("/", function(request,response) {
    response.send("Ya Rasool Allah");
});
app.get("/about", function(request,response) {
    response.send("Sallal la ho alai hi wasallam");
});
app.get("/cricket", function(request,response) {
    response.send("mujh ko apni talab sai siwa chaiyai ");
});
app.get("/hockey", function(request, response) {
    response.send("App jaisai hain waisi aata chiyai");
});

var server = app.listen(3002 ,function() {
    console.log("it 2nd deploy by 3002");

});