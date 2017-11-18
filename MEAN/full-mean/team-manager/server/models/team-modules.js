var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
    name: {type: String, minlength: 2},
    position: {type: String, default: "Benchwarmer"},
    game1: {type: String, default: "Undecided"},
    game2: {type: String, default: "Undecided"},
    game3: {type: String, default: "Undecided"},
    }, {timestamps: true}
);

var Player = mongoose.model('Player', PlayerSchema)