var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BicycleSchema = new Schema({
    title: {type: String, required: true, minlength: 2},
    discription: {
        type: String,
        required: true,
        maxlength: 200, },
    price: {type: String, required: true, min: 1},
    location: {type: String, required: true},
    image: {type: String, required: true}, 
    bike_owner: [{type: Schema.Types.ObjectId, ref: 'User'}]
    }, {timestamps: true}
);

var UserSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}, 
    bikes: [{type: Schema.Types.ObjectId, ref: 'Bicycle'}],
    }, {timestamps: true}
)

var Bicycle = mongoose.model('Bicycle', BicycleSchema);
var User = mongoose.model('User', UserSchema)