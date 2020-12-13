import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import recipeRoutes from './routes/recipes.js';

const app = express();

//in case images are too large
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

//every route in recipeRoutes are going to start with /recipes path
app.use('/recipes', recipeRoutes);

const CONNECTION_URL = 'mongodb+srv://test69:test69@cluster0.7wrhv.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false);
// https://www.mongodb.com/cloud/atlas
