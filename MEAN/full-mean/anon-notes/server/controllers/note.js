var mongoose = require('mongoose');
var Note = mongoose.model('Note');

module.exports = {

    new: (req, res) => {
        let newNote = new Note({note: req.body.note})
        newNote.save((err)=>{
            if(err){
                res.json(err)
            } else {
                console.log('note added!');
                res.json({})
            }
        })
    },

    show: (req, res) => {
        Note.find({}, (err, all_notes)=>{
            if(err){
                console.log('unable to find notes');
                res.json(err)
            } else {
                console.log(all_notes);
                res.json(all_notes)
            }
        })
    }


}