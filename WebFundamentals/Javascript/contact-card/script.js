$(document).ready(function(){
    $('.userInputs').submit(function(){
        var userData = $('.userInputs').serializeArray();
        console.log(userData);
        var newCard = '<div class="contactCard">';
        newCard += '<p>' + userData[0]['value'] + ' ' + userData[1]['value'] + '</p>';
        // console.log('test commas' + newCard);
        newCard += '<p class="discriptionP">' + userData[2]['value'] + '</p> </div>';
        
        // console.log('testresult', newCard);
        $('#contactArea').append(newCard);
        return false;
    });
});