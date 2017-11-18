var path = require('path');
var bicycleControl = require('../controllers/contrlBicycle.js');

module.exports = (app)=> {
    app.post('/login', bicycleControl.login)
    app.post('/register', bicycleControl.register)
    app.post('/addbike', bicycleControl.addbike)
    app.get('/getBikes', bicycleControl.getBikes)
    app.get('/logout', bicycleControl.logout)
    app.get('/getAllBikes', bicycleControl.allBikes)

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
}