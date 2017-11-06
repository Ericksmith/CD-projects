$(document).ready(function(){
    var socket = io.connect()

    $('#button').click(function(e){
        socket.emit('button_push')
    })
    $('#reset').click(function(e){
        socket.emit('reset')
    })

    socket.on('count_increase', function(data){
        $('#count').html(data.num)
    })
    socket.on('count_reset', function(data){
        $('#count').html(data.num)
    })
})