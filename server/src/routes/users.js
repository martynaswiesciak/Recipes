const {Recipe, validate} = require('../models/recipe');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const recipes = await Recipe.find();
    res.send(recipes);
});