$(document).ready(function(){
    $('#formInfo').submit(function(){
        var userInput = $('#formInfo').serializeArray();
        console.log(userInput);
        // var toRemove = 'city=';
        // userInput = userInput.replace(toRemove, '');
        apiKey = '&appid=8ade7b0be78ce6e8b68dbb4ab54c2c22'
        cityName = userInput[0].value;
        url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName.replace(' ', '') + apiKey;
        console.log(url);
        $.get(url, function(response){
            console.log(response);
            if(response == undefined) {
                alert('Unable to find city, please try again');
            } else {
                var temp = response['main'].temp;
                temp = Math.round(temp * 1.8 - 459.67);
                temp = '<h1>' + response.name + '</h1><h2>' + temp + ' Degrees Fahrenheit</h2>';
                console.log(temp);
                $('#weatherScreen').html(temp);
            }
        });
        return false;
    })
});