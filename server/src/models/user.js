const mongoose = require('mongoose');
const Joi = require('joi');

// połączenie z bazą danych
mongoose.connect('mongodb://pbocian:xxx12345@recipes-sandbox-shard-00-01-rn7eo.mongodb.net:27017,recipes-sandbox-shard-00-00-rn7eo.mongodb.net:27017,recipes-sandbox-shard-00-02-rn7eo.mongodb.net:27017/test?authSource=admin&replicaSet=Recipes-sandbox-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true')  
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err))

// schemas
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255,
        trim: true },
    nick: { 
        type: String, 
        required: true,
        minlength: 3,
        maxlength: 255,
        trim: true },
    name: { 
        type: String, 
        minlength: 3,
        maxlength: 255,
        trim: true },
    surname: { 
        type: String, 
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

function validateUser(user) {
    const schema = {
        email: Joi.string().min(3).max(255).required(),
        nick: Joi.string().min(3).max(255),
        name: Joi.string().min(3).max(255),
        surname: Joi.string().min(3).max(255),
        password: Joi.string().min(5).max(255).required()
    };

    return Joi.validate(user, schema);
}

const User = mongoose.model('User', userSchema);
exports.User = User;
exports.validate = validateUser;

//////////// PRZYKŁADOWE FUNKCJE //////////////

// create one user
async function createUser() {
    const user = new User({
        nick: 'nfdjs',
        name: 'fndksj',
        surname: 'dfnjksd',
        password: 'fnkjesdnf'
    });
    try {
        const result = await user.save();
        console.log(result);
    }
    catch (ex) {
        for (field in ex.errors) {
            console.log(ex.errors[field].message);
        }
    }
}

// getting all users
async function getUsers() {
    const users = await User.find();
    console.log(users);
}

// updating user by id
async function updateUser(id) {
    const user = await User.findById(id);
    if (!user) return;
    user.set({
        nick: 'martynka98'
    });

    const result = await user.save();
    console.log(result);
}

// removing user by id
async function removeUser(id) {
    const user = await User.findByIdAndRemove(id);
    console.log(user);
}