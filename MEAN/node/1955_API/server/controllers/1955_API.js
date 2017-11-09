var mongoose = require('mongoose');
var People = mongoose.model('People');

module.exports = {
    show: (req, res) => {
        console.log('In controler');
        People.find({}, (err, all_people)=>{
            if(err){
                console.log("unable to find poeple");
                res.json(err)
            } else {
                console.log('controler People', all_people);
                res.json(all_people)
            }
        })
    },

    new: (req, res) => {
        let newPerson = new People({name: req.params.name});
        newPerson.save((err)=>{
            if(err){
                res.json(err);
            } else {
                res.redirect('/')
            }
        })
    },

    remove: (req, res) => {
        People.find({name: req.params.name}).remove((err)=>{
            if(err){
                res.json(err);
            } else{
                res.redirect('/')
            }
        })
    },

    show_one: (req, res) => {
        People.findOne({name: req.params.name}, (err, person)=>{
            if(err){
                res.json(err);
            } else {
                res.json(person);
            }
        })
    }
}