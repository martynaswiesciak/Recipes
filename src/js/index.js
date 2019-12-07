const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/recipes')  // połączenie z bazą danych
    .then( () => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err))

// schemas
const userSchema = new mangoose.Schema({
    id: String,
    nick: String,
    name: String,
    surname: String,
    password: String
});

const recipeSchema = new mangoose.Schema({
    id: String,
    title: String,
    recipe: String,
    ingredients: Array,
    idUser: String
});

const ingredientSchema = new mangoose.Schema({
    id: String,
    name: String
});

const daySchema = new mangoose.Schema({
    id: String,
    ingredients: Array,
    date: Date
});

const shoppingSchema = new mangoose.Schema({
    id: String,
    day: Date,
    ingredients: Array
});

//models
const User = mangoose.model('User', userSchema);
const Recipe = mongoose.model('Recipe', recipeSchema);
const Ingredient = mongoose.model('Ingredient', ingredientSchema);
const Day = mangoose.model('Day', daySchema);
const Schopping = mongoose.model('Shopping', shoppingSchema);