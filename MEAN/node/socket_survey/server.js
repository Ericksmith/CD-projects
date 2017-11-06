var express = require('express');
var app = express();
var bodyParse = require('body-parser');
var session = require('express-session')
var socket = require('socket.io');

app.use(session({secret:'thisIsASecret'}))
app.set('view engine', 'ejs');
app.use(bodyParse.urlencoded());
app.set('views', __dirname + '/views'); 
app.use(express.static(__dirname + "/static")); 


app.get('/', function(req, res){
    res.render('index.ejs')
})



var server = app.listen(8000, function(){
    console.log('Server is running on port 8000');
})

var io = socket(server)

io.on('connection', function(socket){
    socket.on( "button_clicked", function (data){
        var lucky_number = Math.floor(Math.random()* 1000 + 1)
        let cleanData = data.map(function(x){
            name = x.name
            value = x.value
            return {name: value}
        })
        socket.emit( 'server_response', {data: cleanData, number: lucky_number });
    })
})