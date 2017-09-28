$(document).ready(function() {
    $('.ninjaCatImg').click(function(){
        var temp = $(this).attr('data-alt');
        var temp2 = $(this).attr('src');
        $(this).attr('data-alt', temp2 )
        $(this).attr('src', temp);
    });
});