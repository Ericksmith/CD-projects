var express = require('express');
var app = express();
var bodyParse = require('body-parser');
var mongoose = require('mongoose');
var timestamp = require('mongoose-timestamp');


app.set('view engine', 'ejs');
app.use(bodyParse.urlencoded());
app.set('views', __dirname + '/views');
app.use(express.static(__dirname +"/static"));

//Databases
mongoose.connect('mongodb://localhost/quotes')
mongoose.Promise = global.Promise;
var QouteSchema = new mongoose.Schema({
    name: {type: String, minlength: 2},
    qoute: {type: String, minlength: 6},
})
QouteSchema.plugin(timestamp)
mongoose.model('Qoute', QouteSchema);
var Qoute = mongoose.model('Qoute');

// render routes
app.get('/', function(req,res){
    res.render('index.ejs')
})

app.get('/qoutes', (req, res)=>{
    Qoute.find({}, null, {sort: {createdAt: -1}}, function(err, qoutes){
        if(err){
            console.log('Error adding qoute');
            var context = {
                'result': ['Mongoose error']
            }
        } else {
            console.log('Qoute added!');
            console.log(qoutes);
            var context = {
                'result': qoutes
            }
        }
        res.render('qoutes.ejs', context)
    })
})

// Process routes
app.post('/process', (req, res)=>{
    console.log('post data', req.body);
    var qoute = new Qoute({name: req.body.name, qoute: req.body.qoute})
    qoute.save(function(err){
        if(err){
            console.log('Something went wrong');
            res.json(err)
        } else {
            console.log('Successfully added a Qoute!');
            res.redirect('/qoutes')
        }
    })
})

app.listen(8000, function(){
    console.log('Server is running on port 8000');
})