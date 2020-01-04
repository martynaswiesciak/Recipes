const mongoose = require('mongoose');
const users = require('../routes/users');
const express = require('express');
const app = express();

// połączenie z bazą danych
mongoose.connect('mongodb://pbocian:xxx12345@recipes-sandbox-shard-00-01-rn7eo.mongodb.net:27017,recipes-sandbox-shard-00-00-rn7eo.mongodb.net:27017,recipes-sandbox-shard-00-02-rn7eo.mongodb.net:27017/recipes?authSource=admin&replicaSet=Recipes-sandbox-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true', { useNewUrlParser: true })  
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// routes
app.use(express.json());
app.use('/api/users', users);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));