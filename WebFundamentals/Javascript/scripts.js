
$(document).ready(function() {
    $('.click').click(function() {
        $( this ).css("color","red");
    });

    $('.hide').click(function() {
        // $( this ).hide();
        alert("yo")
    });

    $('#show button').click(function(event) {
        $("hiddenShow").show();
    });
    
});