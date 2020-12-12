import mongoose from 'mongoose';

//structure of a recipe
const recipeSchema = mongoose.Schema({
    title: String,
    steps: [String],
    notes: String,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const RecipeMessage = mongoose.model('RecipeMessage', recipeSchema);

export default RecipeMessage;