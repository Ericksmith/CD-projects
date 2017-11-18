var express = require('express');
var app = express();
var bodyParse = require('body-parser');
const path = require('path')
var session = require('express-session');

app.use(session({secret:'thisIsASecret'}))
app.use(bodyParse.json())
app.use(express.static(path.join(__dirname, 'public', 'dist')))

require('./server/config/mongoose.js')

var routes_setter = require('./server/config/router.js');
routes_setter(app);

app.listen(8000, function(){
    console.log('Express running on port 8000');
})