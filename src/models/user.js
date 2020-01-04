const mongoose = require('mongoose');
const Joi = require('joi');

// schemas
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255,
        trim: true,
        unique: true
    },
    nick: { 
        type: String, 
        required: true,
        minlength: 3,
        maxlength: 255,
        trim: true,
        unique: true
    },
    name: { 
        type: String, 
        minlength: 0,
        maxlength: 255,
        trim: true,
        default: ''
    },
    surname: { 
        type: String, 
        minlength: 0,
        maxlength: 255,
        trim: true,
        default: ''
    },
    password: { 
        type: String, 
        required: true,
        minlength: 5,
        maxlength: 1024,
        trim: true 
    }
});

function validateUser(user) {
    const schema = {
        email: Joi.string().min(3).max(255).required().email(),
        nick: Joi.string().min(3).max(50).required(),
        name: Joi.string().max(50),
        surname: Joi.string().max(50),
        password: Joi.string().min(5).max(255).required()
    };

    return Joi.validate(user, schema);
}

const User = mongoose.model('User', userSchema);
exports.User = User;
exports.validate = validateUser;