var mongoose = require('mongoose');
var User = mongoose.model('User');
var Bicycle = mongoose.model('Bicycle');

module.exports = {
    login: (req, res)=>{
        User.findOne({email: req.body.email}, (err, user)=>{
            if(err){
                res.json(err);
            } else {
                if(User.password == req.body.password){
                    res.json({message: 'Success'})
                } else {
                    res.json({message: "Incorrect password"})
                }
            }
        })
    },

    register: (req, res)=>{
        let newUser = new User(req.body)
        newUser.save((err)=>{
            if(err){
                res.json(err)
            } else {
                req.session.userId = newUser._id
                res.json({message: 'Success'})
            }
        })
    },

    addbike: (req, res)=>{
        User.findOne({_id: req.session.userId}, (err, current_user)=>{
            if(err){
                res.json(err);
            } else{
                let newBike = new Bicycle(req.body)
                newBike.bike_owner = req.session.userId
                newBike.save((err)=>{
                    if(err){
                        res.json(err)
                    } else{
                        current_user.bikes.push(newBike._id)
                        current_user.save((err)=>{
                            if(err){
                                res.json(err)
                            } else {
                                console.log('bike added');
                                res.json({message: "Success"})
                            }
                        })
                        
                    }
                })
            }
        })

    },

    getBikes: (req, res)=> {
        console.log('in ctrl');
        console.log(req.session.userId);
        User.find({_id: req.session.userId}).populate('bikes').exec((err, usersBikes)=>{
            if(err){
                res.json(err);
            } else {
                console.log(usersBikes);
                res.json(usersBikes)
            }
        })
    },

    logout: (req, res)=> {
        req.session.destroy((err)=>{
            if(err){
            console.log('something went wrong');
            res.json(err)
            } else {
                res.redirect('/')
            }
        })
    },

    allBikes: (req, res)=> {
        console.log('in controller');
        Bicycle.find({}, (err, bikes)=>{
            if(err){
                res.json(err)
            } else {
                console.log(bikes);
                res.json(bikes)
            }
        })
    }
}