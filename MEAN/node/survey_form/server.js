var express = require('express');
var app = express();
var bodyParse = require('body-parser');
var session = require('express-session')

app.use(session({secret:'thisIsASecret'}))
app.set('view engine', 'ejs');
app.use(bodyParse.urlencoded());
app.set('views', __dirname + '/views'); 
app.use(express.static(__dirname + "/static")); 


app.get('/', function(req, res){
    res.render('index.ejs')
})

app.get('/result', function(req, res){
    res.render('result.ejs', {data: req.session.data})
})

app.post('/process', function(req, res){
    req.session.data = req.body    
    res.redirect('/result')
})


app.listen(8000, function(){
    console.log('Server is running on port 8000');
})