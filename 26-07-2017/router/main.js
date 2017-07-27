// module.exports = function(app)
// {
//      app.get('/',function(req,res){
//         res.render('index.html')
//      });
//      app.get('/about',function(req,res){
//         res.render('about.html');
//     });
// }


// module.exports = function(app) {

// }
// module.exports= function(app) {

// }
// module.exports= function(app) {

// }

// module.exports=function(app) {

// };

// module.exports = function (app) {
//     app.get("/", function(request, response) {
//         response.render("index.html")
//     });
//     app.get("/", function(request, response) {
//         response.render("about.html");
//     });
// };

module.exports = function(app) {
    app.get("/", function(request, response) {
        response.render("index.html");
    });
    app.get("/about", function (request, response) {
        response.render("about.html");
    });
    app.get("/cricket", function(request, response) {
        response.render("cricket.html");
    });
    app.get("/hockey", function(request, response) {
        response.render("hockey.html")
    });
};
