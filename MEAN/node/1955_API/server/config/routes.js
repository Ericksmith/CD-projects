var mongoose = require('mongoose');
var People = mongoose.model('People');
var ctrl1955 = require("../controllers/1955_API.js");

module.exports = function(app) {
    //render routes
    console.log('in routes export');
    app.get('/', ctrl1955.show)

    app.get('/new/:name', ctrl1955.new)

    app.get('/remove/:name/', ctrl1955.remove)
    
    app.get('/:name', ctrl1955.show_one)
}