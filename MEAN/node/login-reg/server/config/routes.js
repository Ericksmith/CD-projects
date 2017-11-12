var mongoose = require("mongoose");
var User = mongoose.model("User");
var controller = require("../controllers/login-reg_controller");

module.exports = function(app) {
    //render routes
    app.get("/", (req, res)=>{
        res.render("index.ejs")
    });

    app.get("/success", (req, res)=>{
        res.render("success.ejs")
    })

    //Process routes
    app.post("/register", controller.register);
}