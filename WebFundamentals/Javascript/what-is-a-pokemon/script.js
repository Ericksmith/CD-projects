$(document).ready(function(){
    pokeAPIRoot = '<img src="http://pokeapi.co/media/sprites/pokemon/';
    for(var i = 1; i<= 151; i++){
        var currentPokemon = i + '.png" data-index="' + i + '">';
        currentPokemon = pokeAPIRoot + currentPokemon;
        $('#pokeBall').append(currentPokemon);
    }

    $('img').click(function(){
        var selectedPokemon = $(this).data('index');
        var URL = 'https://pokeapi.co/api/v2/pokemon/' + selectedPokemon +'/';
        $.get(URL, function(pokeData){
            selectedPokemon = '<h1>' + pokeData.name + '</h1>';
            selectedPokemon += '<img src="' + pokeData['sprites'].front_default + '">'
            selectedPokemon += '<h2> Types</h2> <ul>'
            console.log(pokeData['types'].length);
            for (var i = 0; i < pokeData['types'].length; i++ ) {
                selectedPokemon += '<li>' + pokeData.types[i].type.name + '</li>';
            }
            selectedPokemon += '</ul> <h2>Height</h2> <p>' + pokeData.height + '</p>';
            selectedPokemon += '<h2>Weight</h2><p>' + pokeData.weight + '</p>';
            console.log(selectedPokemon);
            $('#pokeStatArea').html(selectedPokemon);
        },'JSON');
    });
});