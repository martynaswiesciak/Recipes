const mongoose = require('mongoose');
const Joi = require('joi');

// połączenie z bazą danych
mongoose.connect('mongodb://localhost/recipes')  
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err))

const ingredientSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true,
        minlength: 3,
        maxlength: 255,
        trim: true }
});

function validateIngredient(ingredient) {
    const schema = {
        name: Joi.string().min(3).max(255).required()
    };

    return Joi.validate(ingredient, schema);
}

const Ingredient = mongoose.model('Ingredient', ingredientSchema);
exports.Ingredient = Ingredient;
exports.validate = validateIngredient;