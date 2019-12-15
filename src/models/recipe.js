const mongoose = require('mongoose');
const Joi = require('joi');

// połączenie z bazą danych
mongoose.connect('mongodb://localhost/recipes')  
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err))

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

// walidacja 
function validateRecipe(recipe) {
    const schema = {
        title: Joi.string().min(5).max(50).required(),
        recipe: Joi.string().min(5).required(),
        ingredients: Joi.required()
    };

    return Joi.validate(recipe, schema);
}

const Recipe = mongoose.model('Recipe', recipeSchema);
exports.Recipe = Recipe;
exports.validate = validateRecipe;

