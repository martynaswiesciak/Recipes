const { Schema } = require('mongoose');
const ObjectId = Schema.Types.ObjectId;


const daySchema = new mongoose.Schema({
    ingredients: [ String ],
    date: Date
});

const ingredientSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true,
        minlength: 3,
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

const shoppingSchema = new mongoose.Schema({
    day: Date,
    ingredients: [ String ]
});

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

module.exports = {daySchema, userSchema, ingredientSchema, shoppingSchema, recipeSchema}