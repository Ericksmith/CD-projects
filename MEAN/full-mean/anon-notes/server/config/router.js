var mongoose = require('mongoose');
var Note = mongoose.model('Note');
var noteCtrl = require('../controllers/note.js');

module.exports = function(app) {

    app.get('/getNotes', (req, res)=>{
        console.log('routing getNotes');
        noteCtrl.show(req,res)
    })

    app.post('/add-note', (req, res)=>{
        noteCtrl.new(req, res)
    })
}