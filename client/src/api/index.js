import axios from 'axios';

const fetchRecipesUrl = 'http://localhost:5000/recipes';
const newRecipeUrl = 'http://localhost:5000/recipes/newrecipe';

export const fetchRecipes = () => axios.get(fetchRecipesUrl);
export const createRecipe = (newRecipe) => axios.post(newRecipeUrl, newRecipe);