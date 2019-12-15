const mongoose = require('mongoose');

// połączenie z bazą danych
mongoose.connect('mongodb://localhost/recipes')  
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err))


const shoppingSchema = new mongoose.Schema({
    day: Date,
    ingredients: [ String ]
});

const Schopping = mongoose.model('Shopping', shoppingSchema);
exports.Shopping = Shopping;