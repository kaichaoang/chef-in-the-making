import mongoose from 'mongoose';

//structure of a recipe
const recipeSchema = mongoose.Schema({
    recipeName: String,
    description: String,
    servings: String,
    timeNeeded: String,
    ingredients: [String],
    steps: [String],
    notes: String,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const RecipeDetail = mongoose.model('RecipeDetail', recipeSchema);

export default RecipeDetail;