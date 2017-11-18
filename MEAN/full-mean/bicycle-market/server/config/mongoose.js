var mongoose = require('mongoose');
var path = require('path');


mongoose.connect('mongodb://localhost/bicycle-market');
mongoose.Promise = global.Promise;
var fs = require('fs');

var models_path = path.join(__dirname, '/../models');
fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js') >= 0) {
        require(models_path + '/' + file);
    }
})