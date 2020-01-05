const mongoose = require('mongoose');
//

const userSchema = mongoose.Schema({
    nick: { 
        type: String, 
        required: true,
        minlength: 3,
        maxlength: 255,
        trim: true },
    name: { 
        type: String, 
        required: true,
        minlength: 3,
        maxlength: 255,
        trim: true },
    surname: { 
        type: String, 
        required: true,
        minlength: 3,
        maxlength: 255,
        trim: true },
    password: { 
        type: String, 
        required: true,
        minlength: 5,
        maxlength: 255,
        trim: true }
});
module.exports = mongoose.model('User',userSchema)