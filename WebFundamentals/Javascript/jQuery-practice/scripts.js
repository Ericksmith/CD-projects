
$(document).ready(function() {
    $('.click').click(function() {
        $( this ).css("color","red");
    });

    $('.hide').click(function() {
        $( this ).hide();
    });

    $('#show').click(function(){
        $('#hiddenShow').show();
    });

    $('#toggle').click(function() {
        $('#toggleImage').toggle();
    });

    $('#slideDown').click(function() {
        $('#slideImage').slideDown();
    });

    $('#slideUp').click(function() {
        $('.divRemove').slideUp();
    });

    $('#slideToggle').click(function() {
        $('#toggleSlideImage').slideToggle();
    });

    $('#fadeIn').click(function() {
        $('#fadeInImage').fadeIn();
    });
    
    $('#fadeOut').click(function(){
        $('#fadeInImage').fadeOut();
    });

    $('#addClass').click(function() {
        $('.noClass').addClass('classyClass');
    });

    $('#beforeThis').before("<h4>This loaded in before this thing below me!</h4>");

    $('#afterThis').after("<h4>This loaded from jQuery after the DOM!</h4>");
   
    $('#appendButton').click(function() {
        $('#appendThis').append('<li>I am appended!</li>');
    });

    $('#hoverHere').hover(function() {
        $('#hoverTarget').html("<h1>I'm HUUGE!</h1>");
    })

    $('#arrtButton').click(function() {
        $('#targetList').attr('value', '100');
    });

    function displayVals() {
        var singleValues = $('#valTest').val();
        $('#valText').html(singleValues);
    }

    $('#valTest').change(displayVals);
    displayVals();

    var str = $('#textTwo').text();
    str += $('#textOne').text();
    $('#textTarget').text(str);

    // $('body').data('data-greeting','Hello world')
    // $('#dataButton').click(function() {
    //     $('#dataTarget').data('data-greeting');
    // });

    $("#dataButton").click(function(){
        $('#dataTarget').data('greeting', 'Hello World');
    });
    $('#dataSetter').click(function(){
        var greeting = $('#dataTarget').data('greeting');
        $('#dataTarget').text(greeting);
    });
});