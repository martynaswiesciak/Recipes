const mongoose = require('mongoose');

// połączenie z bazą danych
mongoose.connect('mongodb://localhost/recipes')  
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err))

const daySchema = new mongoose.Schema({
    ingredients: [ String ],
    date: Date
});

const Day = mongoose.model('Day', daySchema);
exports.Day = Day;