$(document).ready(function(){
    $('.houseImages').hover(function(){
        $(this).stop(true).animate({
            width: '160px',
            margin: '0px 0px 0px 66px', 
        }, 500);
    }, function(){
        $(this).animate({
            width: '140px',
            margin: '40px 0px 0px 86px'
        }, 500);
    });
    url = 'https://www.anapioficeandfire.com/api/houses/';

    $('.houseImages').click(function(){
        houseID = $(this).data('house-id');
        $.get(url + houseID, function(houseInfo){
            var card = '<div id="displayCard"> <h1>' + houseInfo.name + '</h1>';
            card += '<h2>Region: ' + houseInfo.region + '</h2>';
            card += '<h2>House Saying: ' + houseInfo.words + '</h2>';
            var titleList = '';
            for(var i = 0; i < houseInfo.titles.length; i++) {
                titleList += '<li>' + houseInfo.titles[i] + '</li>';
            }
            console.log(titleList);
            card += '<h3>Titles:</h3> <ul>' + titleList + '</ul></div>';
            console.log(card);
            $('#houseDisplay').html(card);
        });
    });
    // houseList = []
    // urlBack = '&pageSize=37'
    // // for(var i = 1; i < 13; i++){
    // //     $.get(url + '?page=' + i + urlBack, function(responseHouses){
    // //         houseList.push(responseHouses);
    // //     }, 'JSON');
    // // }
});