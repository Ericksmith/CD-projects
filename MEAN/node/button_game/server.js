var express = require('express');
var app = express();
var socket = require('socket.io');
var count = 0


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); 
app.use(express.static(__dirname + "/static")); 

app.get('/', function(req, res){
    res.render('index.ejs', {num: count})
})

var server = app.listen(8000, function(){
    console.log('Server running on port 8000');
})

var io = socket(server);

io.on('connection', function(socket){
    socket.on('button_push', function(){
        console.log('click');
        count += 1;
        io.emit('count_increase', {num: count})
    })

    socket.on('reset', function(){
        count = 0;
        io.emit('count_reset', {num: count})
    })
})