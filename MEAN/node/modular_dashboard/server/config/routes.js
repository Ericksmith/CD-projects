var mongoose = require('mongoose');
var User = mongoose.model('User');
var dashboard = require('../controllers/dashboard.js');

module.exports = function(app) {
    //render routes
    app.get('/', function(req, res){
        console.log('getting to routes');
        dashboard.show(req, res)
    })

    app.get('/penguins/new', function(req,res){
        res.render('new.ejs')
    })

    app.get('/penguins/edit/:id', (req,res)=> {
        dashboard.show_edit(req, res)
    })

    app.get('/penguins/:id', (req, res)=>{
        dashboard.show_one(req, res);
    })

    //Process routes
    // addds a new penguin to db
    app.post('/penguins', (req, res)=>{
        dashboard.add_penguin(req, res);
    })

    //edit penguin
    app.post('/penguins/:id', (req, res)=> {
        dashboard.edit_penguin(req, res);
    })

    app.post('/penguins/destroy/:id', (req, res)=>{
        dashboard.destroy(req, res);
    })    
}