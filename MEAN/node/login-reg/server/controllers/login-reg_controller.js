var mongoose = require("mongoose");
var User = mongoose.model("User");
var bcrypt = require("bcrypt-as-promised");

module.exports = {
    register: (req, res) => {
        var enteredPW = req.body.password;
        console.log((bcrypt.hash(enteredPW, 10).then(console.log, console.error)));
        let hashed_PW = (bcrypt.hash(enteredPW, 10).then(console.log, console.error));
        User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            birthday: req.body.birthday,
            password: hashed_PW,
        })
    }
}