import express from 'express';

import { getRecipes, createRecipe } from '../controllers/recipeController.js'

const router = express.Router();

//need this request and response for every single routing callback
router.get('/', getRecipes);
router.post('/newrecipe', createRecipe); 

export default router;