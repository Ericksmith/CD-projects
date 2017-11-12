var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        minlength: 2,
        required: [true, "First name is required"],
        validate: {
            validator: (v)=>{
                return /^[a-zA-Z]*$/.test(v)
            },
            message: "No special characters or numbers allowed in your name."
        }
    },
    last_name: {
        type: String,
        minlength: 2,
        required: [true, "First name is required"],
        validate: {
            validator: (v)=>{
                return /^[a-zA-Z]*$/.test(v)
            },
            message: "No special characters or numbers allowed in your name."
        }
    },
    email: {
        type: String,
        minlength: 2,
        required: [true, "Please enter a email."],
        unique: true,
        validate: {
            validator: (v)=> {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
            },
            message: "Invalid Email format"
        }
    },
    password: {
        type: String,
        minlength: 8,
        required: [true, "Please enter a password"]
    },
    birthday: {
        type: Date,
    }
    },{timestamps: true}
);

var User = mongoose.model("User", UserSchema);