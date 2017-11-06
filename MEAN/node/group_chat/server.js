var express = require('express');
var app = express();
var socket = require('socket.io');
var session = require('express-session');
var bodyParse = require('body-parser');

// middleware
app.use(session({secret:'thisIsASecret'}))
app.set('view engine', 'ejs');
app.use(bodyParse.urlencoded());
app.set('views', __dirname + '/views'); 
app.use(express.static(__dirname + "/static")); 

// routing{user: name, users:all_users}
app.get('/', function(req, res){

    res.render('index.ejs', {'messages': messages, 'users': all_users})
})

var server = app.listen(8000, function(){
    console.log('Server running on port 8000'); 
})

var all_users = {}
var messages = []
var io = socket(server);

io.on('connection', function(socket){
    socket.on('new_user', function(data){
        let user_id = socket.id
        all_users[user_id] = data.user
        messages.push(data.user + ' joined the chat')
        io.emit('user_joined', data)
        socket.emit('load_chat', all_users)
    })

    socket.on('disconnect', function(){
        leaver = all_users[socket.id]
        messages.push(leaver + ' left the chat')
        delete all_users[socket.id]
        io.emit('user_left', {'leaver': leaver}, all_users)
    })

    socket.on('message', function(data){
        let userId = data.user_id
        let name = all_users[userId] + ': '
        let text = data.text
        console.log('text', text);
        message_text = name + text
        messages.push(message_text)
        io.emit('new_message', {'name': name, 'text':text})
    })
})