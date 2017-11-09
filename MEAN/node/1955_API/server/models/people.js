var mongoose = require('mongoose');

var PeopleSchema = new mongoose.Schema({
    name: {type: String, minlength: 2},
    });

var People = mongoose.model('People', PeopleSchema)