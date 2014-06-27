var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

module.exports = function(app){

  app.get("/", function(req, res){
    res.render("index", {
      title: "AJAX Form Submission Test"
    })
  });

  app.post("/photos", multipartMiddleware, function(req, res){
    console.log('body', req.body);
    console.log("request", req.files);
    res.send(200);
  });
};
