import RecipeDetail from '../models/recipeDetails.js'

export const getRecipes = async (req, res) => {
    try {
        const recipeDetails = await RecipeDetail.find();
        console.log(recipeDetails);
        res.status(200).json(recipeDetails);
    } catch (e) {
        res.status(404).json({ message: e.message })
    }
}

export const createRecipe = async (req, res) => {
    console.log('works!');
    const recipe = req.body;

    const newRecipe = new RecipeDetail(recipe);

    try {
        await newRecipe.save();
        res.status(201).json(newRecipe);
    } catch (e) {
        res.status(404).json({ message: e.message })
    }
}