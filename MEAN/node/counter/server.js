var express = require('express');
var app = express();
var bodyParse = require('body-parser');
var session = require('express-session')

app.use(session({secret:'thisIsASecret'}))
app.set('view engine', 'ejs');
app.use(bodyParse.urlencoded());
app.set('views', __dirname + '/views'); 



app.get('/', function(req, res){
    if(req.session.counter == null){
        req.session.counter = 1

    } else {
    req.session.counter += 1
    }
    res.render('index.ejs', {count:req.session.counter})
})

app.get('/add-2', function(req, res){
    req.session.counter += 1;
    res.redirect('/')
})

app.get('/reset', function(req, res){
    req.session.counter = 0
    res.redirect('/')
})


app.listen(8000, function(){
    console.log('Server is running on port 8000');
})