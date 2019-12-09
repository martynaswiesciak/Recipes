const mongoose = require('mongoose');

// połączenie z bazą danych
mongoose.connect('mongodb://localhost/recipes')  
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

const recipeSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true,
        minlength: 5,
        maxlength: 255,
        trim: true },
    recipe: { 
        type: String, 
        required: true,
        minlength: 5,
        trim: true },
    ingredients: {
        type: [ String ],
        required: true },
        userId: String
});

const ingredientSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true,
        minlength: 3,
        maxlength: 255,
        trim: true }
});

const daySchema = new mongoose.Schema({
    ingredients: [ String ],
    date: Date
});

const shoppingSchema = new mongoose.Schema({
    day: Date,
    ingredients: [ String ]
});

// models
const User = mongoose.model('User', userSchema);
const Recipe = mongoose.model('Recipe', recipeSchema);
const Ingredient = mongoose.model('Ingredient', ingredientSchema);
const Day = mongoose.model('Day', daySchema);
const Schopping = mongoose.model('Shopping', shoppingSchema);


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
