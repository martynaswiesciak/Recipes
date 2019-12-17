const mongoose = require('mongoose');
const Joi = require('joi');

// połączenie z bazą danych
mongoose.connect('mongodb://pbocian:xxx12345@recipes-sandbox-shard-00-01-rn7eo.mongodb.net:27017,recipes-sandbox-shard-00-00-rn7eo.mongodb.net:27017,recipes-sandbox-shard-00-02-rn7eo.mongodb.net:27017/test?authSource=admin&replicaSet=Recipes-sandbox-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true')  
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

