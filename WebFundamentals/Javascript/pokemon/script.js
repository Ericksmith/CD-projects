$(document).ready(function(){
    pokeAPIRoot = '<img src="http://pokeapi.co/media/sprites/pokemon/';
    for(var i = 1; i<= 151; i++){
        var currentPokemon = i + '.png">';
        currentPokemon = pokeAPIRoot + currentPokemon;
        $('.pokeBall').append(currentPokemon);
    }
});