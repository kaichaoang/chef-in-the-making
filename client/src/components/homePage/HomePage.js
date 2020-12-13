import React from 'react';
import { Grid, Typography, Button, Toolbar, IconButton, AppBar, CssBaseline } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useSelector } from 'react-redux';
import useStyles from './styles';

export default function HomePage() {
    const recipes = useSelector((state) => state.recipes);
    const classes = useStyles();
        
    return (
        <div >
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
                    
                    <Button href="/newrecipe" color="inherit" className={classes.newRecipeButton}>
                        Add a new recipe
                    </Button>

                    <Button href="/login" color="inherit" className={classes.loginButton}>
                        Logout
                    </Button>
                   
                </Toolbar>
            </AppBar>
            </Grid>
        </div>
    );
}