function myFunction() {
    var txt;
    var person = prompt("Please enter your name:");
    if (person == null || person == "") {
        myFunction()
    } else {
        return person
    }
}

var name = myFunction();

$(document).ready(function(){
    var socket = io.connect();
    console.log(name);
    socket.on('connect', function(){
        socket.emit('new_user', {'user':name})
        console.log('connect');
    })

    $('#send').click(function(){
        console.log('send start');
        if(message !== ""){
            let message = $('#message').val();
            console.log('send');
            socket.emit('message', {'text': message, 'user_id': socket.id})
        }
    })
    
    socket.on('user_joined', function(data){
        console.log('hi', data);
        $('#chat_area').append('<p>'+ data.user +' joined the chat</p>')
        $('#users').append('<p><strong>'+ data.user +'</strong></p>')
    })
    
    socket.on('user_left', function(data, users){
        $('#chat_area').append('<p>'+ data['leaver'] +' left the chat</p>')
        let users_list = ''
        console.log(users);
        for(let key in users){
            let user = users[key]
            console.log('for loop',user);
            users_list += '<p><strong>'+ user +'</strong></p>'
        }
        $('#users').html(users_list)
    })
    
    socket.on('new_message', function(data){
        console.log('message area');
        $('#chat_area').append('<p><strong>'+ data.name +'</strong> '+ data.text +'</p>')
    })
})