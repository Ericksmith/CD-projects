$(document).ready(function(){
    $('.ninjaImg').click(function(){
        $(this).hide();
    });
    $('h3').click(function(){
        $('.ninjaImg').show();
    });
});