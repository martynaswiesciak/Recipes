const {Recipe, validate} = require('../models/recipe');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// getting all recipes
router.get('/', async (req, res) => {
    const recipes = await Recipe.find();
    res.send(recipes);
});

// getting one recipe by id
router.get('/:id', async (req, res) => {
    const recipe = await Recipe.findById(req.params.id);
  
    if (!recipe) return res.status(404).send('The recipe with the given ID was not found.');
  
    res.send(recipe);
});

// posting recipe
router.post('/', async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
  
    let recipe = new Recipe({ 
      title: req.body.title,
      recipe: req.body.recipe,
      ingredients: req.body.ingredients
    });
    recipe = await recipe.save();
    
    res.send(recipe);
});

// updating recipe by id
router.put('/:id', async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
  
    const recipe = await Recipe.findByIdAndUpdate(req.params.id,
      { 
        title: req.body.title,
        recipe: req.body.recipe,
        ingredients: req.body.ingredients
      }, { new: true });
  
    if (!recipe) return res.status(404).send('The recipe with the given ID was not found.');
    
    res.send(recipe);
});

//delete recipe by id
router.delete('/:id', async (req, res) => {
    const recipe = await Recipe.findByIdAndRemove(req.params.id);
  
    if (!recipe) return res.status(404).send('The recipe with the given ID was not found.');
  
    res.send(recipe);
});

module.exports = router;