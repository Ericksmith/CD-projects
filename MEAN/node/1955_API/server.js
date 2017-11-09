var express = require('express');
var app = express();
var bodyParse = require('body-parser');

//middleware
app.use(bodyParse.json());
app.set('views', __dirname + '/views');
app.use(express.static(__dirname +"/static"));

//database
require("./server/config/mongoose.js");

var routes_setter = require("./server/config/routes.js")
routes_setter(app)


app.listen(8000, function(){
    console.log('Server running on port 8000');
})