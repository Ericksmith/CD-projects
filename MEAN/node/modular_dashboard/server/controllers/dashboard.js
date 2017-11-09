var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
    show: function(req, res){User.find({}, function(err, query_results){
        if(err){
            console.log('couldnt find the User');
            res.json(err)
        } else {
            console.log('Index results',query_results);
            res.render('index.ejs', {all_penguins: query_results})
        }
    })
},
    
    show_edit: function(req, res){ User.find({_id: req.params.id}, (err, penguin)=>{
        if(err){
            console.log('Couldnt not find user');
            res.json(err);
        } else {
            console.log('edit result', penguin);
            res.render('edit.ejs', {'penguin': penguin})
        }
    })
},

    show_one: function(req, res){User.find({_id: req.params.id}, function(err, query_results){
        if(err){
            console.log('Unable to find penguin');
            res.json(err);
        } else {
            console.log('Penguin found');
            console.log(query_results);
            res.render('show.ejs', {penguin: query_results});
        }
    })
},

    add_penguin: function(req, res){ 
        let penguin = new User({name: req.body.name});
        penguin_id = penguin.id;
        console.log(penguin_id);
        penguin.save(function(err){
            if(err){
                console.log('Unable to save new penguin');
                res.json(err);
            } else {
                console.log('Successfully added to db');
                res.redirect('/penguins/'+ penguin_id)
            }
        })    
},

    edit_penguin: function(req, res){User.findOneAndUpdate({_id: req.params.id}, {name: req.body.name},  (err, penguin)=>{
        console.log('Callback');
        if(err){
            console.log("Can't find penguin");
            res.json(err)
        } else {
            console.log('Successfully edited');
            res.redirect('/penguins/'+ penguin.id)
        }
    })
},

    destroy: function(req, res){ User.findOne({_id: req.params.id}, (err, penguin)=>{
        if(err){
            console.log('Unable to find penguin to destory');
            res.json(err)
        } else {
            penguin.remove()
            res.redirect('/')
        }
    })  
},

    
}