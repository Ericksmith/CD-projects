var express = require('express');
var app = express();
var bodyParse = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParse.urlencoded());
app.set('views', __dirname + '/views');
app.use(express.static(__dirname +"/static"));

// render routes
app.get('/', function(req,res){
    res.render('index.ejs')
})

app.get('/', (req, res)=>{
    res.render('qoutes.ejs')
})

// Process routes
app.post('/process', (req, res)=>{

})