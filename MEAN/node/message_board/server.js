var express = require('express');
var app = express();
var bodyParse = require('body-parser')
var mongoose = require('mongoose');

app.set('view engine', 'ejs');
app.use(bodyParse.urlencoded());
app.set('views', __dirname + '/views');
app.use(express.static(__dirname+ "/static"));

//database
mongoose.connect('mongodb://localhost/message_board');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var MessageSchema = new mongoose.Schema({
    name: {type: String, minlength: 4},
    message: {type: String, minlength: 2},
    comments: [{type: Schema.Types.ObjectId, ref:'Comment'}]
    }, {timestamps: true}  
);
var CommentSchema = new mongoose.Schema({
    name: {type: String, minlength: 4},
    text: {type: String, minlength: 4},
    _message: {type: Schema.Types.ObjectId, ref:'Message'}
    }, {timestamps: true}
)
mongoose.model('Comment', CommentSchema);
mongoose.model('Message', MessageSchema);
var Comment = mongoose.model('Comment');
var Message = mongoose.model('Message');

//render routes
app.get('/', (req, res) =>{
    Message.find({}).populate('comments').exec(function(err, messages){
        if(err){
            console.log("unable to find messages");
            res.json(err)
        } else {
            console.log(messages);
            res.render('index.ejs', {'messages': messages})
        }
    })
})


//processes
app.post('/new-message', (req, res)=>{
    let newMessage = new Message({
        name: req.body.name,
        message: req.body.message
    })
    newMessage.save((err)=> {
        if(err){
            console.log("Unable to add message");
            res.json(err)
        } else{
            console.log('Message added');
            res.redirect('/')
        }
    })
})

app.post('/new-comment/:id', (req, res)=>{
    Message.findOne({_id: req.params.id}, (err, message)=>{
        let newComment = new Comment({
            name: req.body.name,
            text: req.body.comment
        })
        console.log('new Comment*******', newComment);
        newComment._message = message._id;
        message.comments.push(newComment)
        console.log('current messages*****', message);
        newComment.save((err)=>{
            if(err){
                console.log('new comment error');
                res.json(err);
            } else {
                message.save((err)=>{
                    if(err){
                        console.log('message saving error');
                        res.json(err);
                    } else {
                        console.log('Comment added to message');
                        res.redirect('/');
                    }
                })
            }
        })
    })
})


app.listen(8000, ()=>{
    console.log('Server running on port 8000');
})