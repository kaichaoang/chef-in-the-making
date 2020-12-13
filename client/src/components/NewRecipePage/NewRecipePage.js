import { CssBaseline } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from './styles';
import { Grid, TextField, Typography, Button, Paper, AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import FileBase from 'react-file-base64';

export default function NewRecipePage() {
    const [recipeData, setRecipeData] = useState({
        recipeName: '',
        description: '',
        servings: '',
        timeNeeded: '',
        ingredients: '',
        steps: '',
        notes: '',
        selectedFile: '',
    });
    const classes = useStyles();

    const handleSubmit = () => {
        console.log('dog');
    };

    return (
        <div>
            <CssBaseline />
            <Grid item className={classes.webNameGrid}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>

                        <Typography variant="h6" color="inherit" className={classes.webName}>
                            chef in the making.
                        </Typography>

                        <Button href="/home" color="inherit" className={classes.homeButton}>
                            Home
                        </Button>

                        <Button href="/login" color="inherit" className={classes.loginButton}>
                            Logout
                        </Button>

                    </Toolbar>
                </AppBar>
            </Grid>

            <Grid alignItems="center" direction="column" justify="space-between">
                <Grid item className={classes.paperGrid} align="center">
                    <Paper elevation={3} className={classes.basePaper}>
                        <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                            <Grid container alignItems="center" direction="column" justify="space-between">
                                <Typography className={classes.recipeFormHeader}>
                                    What are you making today?
                                </Typography>

                                <TextField name="recipeName" label="Recipe Name" margin="normal" variant="outlined" size="small"
                                    className={classes.recipeName}
                                    value={recipeData.recipeName}
                                    onChange={(e) => setRecipeData({ ...recipeData, recipeName: e.target.value })} />

                                <TextField name="description" label="Description" margin="normal" variant="outlined" size="small"
                                    className={classes.description}
                                    value={recipeData.description}
                                    onChange={(e) => setRecipeData({ ...recipeData, description: e.target.value })} />

                                <TextField name="servings" label="Servings" margin="normal" variant="outlined" size="small"
                                    className={classes.servings}
                                    value={recipeData.servings}
                                    onChange={(e) => setRecipeData({ ...recipeData, servings: e.target.value })} />

                                <TextField name="timeNeeded" label="Time Needed" margin="normal" variant="outlined" size="small"
                                    className={classes.timeNeeded}
                                    value={recipeData.timeNeeded}
                                    onChange={(e) => setRecipeData({ ...recipeData, timeNeeded: e.target.value })} />

                                <TextField name="ingredients" label="Ingredients" margin="normal" variant="outlined" size="small"
                                    className={classes.ingredients}
                                    value={recipeData.ingredients}
                                    onChange={(e) => setRecipeData({ ...recipeData, ingredients: e.target.value })} />

                                <TextField name="steps" label="Steps" margin="normal" variant="outlined" size="small"
                                    className={classes.steps}
                                    value={recipeData.steps}
                                    onChange={(e) => setRecipeData({ ...recipeData, steps: e.target.value })} />

                                <TextField name="notes" label="Notes" margin="normal" variant="outlined" size="small"
                                    className={classes.notes}
                                    value={recipeData.notes}
                                    onChange={(e) => setRecipeData({ ...recipeData, notes: e.target.value })} />

                                <div className={classes.fileInput}>
                                    <FileBase type="file" multiple={false}
                                        onDone={(base64) => setRecipeData({ ...recipeData, selectedFile: base64 })} />
                                </div>

                                <div className={classes.buttonSubmitDiv}>
                                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large"
                                        type="sumbit" fullWidth>
                                        Upload!
                                    </Button>
                                </div>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
