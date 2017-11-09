var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParse = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParse.urlencoded());
app.set('views', __dirname + '/views');
app.use(express.static(__dirname +"/static"));

//database
mongoose.connect('mongodb://localhost/dashboard');
mongoose.Promise = global.Promise;
var UserSchema = new mongoose.Schema({
    name: {type: String, minlength: 2},
    }, {timestamps: true}
);
mongoose.model('User', UserSchema);
var User = mongoose.model('User');

//render routes
app.get('/', function(req, res){
    User.find({}, function(err, query_results){
        if(err){
            console.log('couldnt find the User');
            res.json(err)
        } else {
            console.log('Index results',query_results);
            res.render('index.ejs', {all_penguins: query_results})
        }
    })
})

app.get('/penguins/new', function(req,res){
    res.render('new.ejs')
})

app.get('/penguins/edit/:id', (req,res)=> {
    User.find({_id: req.params.id}, (err, penguin)=>{
        if(err){
            console.log('Couldnt not find user');
            res.json(err);
        } else {
            console.log('edit result', penguin);
            res.render('edit.ejs', {'penguin': penguin})
        }
    })
})

app.get('/penguins/:id', (req, res)=>{
    User.find({_id: req.params.id}, function(err, query_results){
        if(err){
            console.log('Unable to find penguin');
            res.json(err);
        } else {
            console.log('Penguin found');
            console.log(query_results);
            res.render('show.ejs', {penguin: query_results})
        }
    })
})

//Process routes
// addds a new penguin to db
app.post('/penguins', (req, res)=>{
    let penguin = new User({name: req.body.name})
    penguin_id = penguin.id
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
})

//edit penguin
app.post('/penguins/:id', (req, res)=> {
    console.log('starting edit');
    User.findOneAndUpdate({_id: req.params.id}, {name: req.body.name},  (err, penguin)=>{
        console.log('Callback');
        if(err){
            console.log("Can't find penguin");
            res.json(err)
        } else {
            console.log('Successfully edited');
            res.redirect('/penguins/'+ penguin.id)
        }
    })
})

app.post('/penguins/destroy/:id', (req, res)=>{
    User.findOne({_id: req.params.id}, (err, penguin)=>{
        if(err){
            console.log('Unable to find penguin to destory');
            res.json(err)
        } else {
            penguin.remove()
            res.redirect('/')
        }
    })
})

app.listen(8000, function(){
    console.log('Running Server on port 8000');
})