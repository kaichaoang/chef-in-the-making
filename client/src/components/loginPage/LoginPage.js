import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Typography, Button, InputAdornment, CssBaseline } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import loginImage from '../../resources/images/login.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        flexGrow: '1',
    },
    gridContainer: {
        minHeight: '100vh',
    },
    imageGrid: {
        minHeight: '100vh',
        backgroundImage: `url(${loginImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'calc(100%) calc(20%)',
    },
    loginGrid: {
        padding: '10px',
    },
    contentDiv: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '300',
        maxWidth: '400',
    },
    webName: {
        fontFamily: 'Nunito',
    },
    buttonHeightSpacing: {
        height: '10px'
    },
    loginButtonDiv: {
        fontFamily: 'Nunito',
    },
    signUpButtonDiv: {
        fontFamily: 'Nunito',
    },
    backToWecomeButtonGrid: {

    },
    backToWelcomeButton: {
        textTransform: 'capitalize',
        fontFamily: 'Nunito',
    },
    signUpButtonGrid: {

    },
    signUpButton: {
        textTransform: 'capitalize',
        fontFamily: 'Nunito',
    },
    forgetPasswordButtonGrid: {

    },
    forgetPasswordButton: {
        fontFamily: 'Nunito',
    }
}
));

export default function LoginPage() {
    const classes = useStyles();
    return (
        <div>
            <CssBaseline />
            <Grid container className={classes.gridContainer}>
                <Grid item xs={12} sm={6} className={classes.imageGrid} />
                <Grid container xs={12} sm={6} alignItems="center" direction="column"
                    justify="space-between" className={classes.loginGrid}>

                    <div />
                    {/* mule div above */}
                    {/* contentDiv contains 2 mule divs to centralise the login details component*/}
                    <div className={classes.contentDiv}>
                        <Grid container justify="center">
                            <Typography align='center' variant='h4' className={classes.webName}>
                                chef in the making.
                            </Typography>
                        </Grid>

                        <TextField label="Email" margin="normal" variant="outlined" size="small"
                            InputProps={{ startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment> }}
                            className={classes.emailField} />

                        <TextField label="Password" margin="normal" variant="outlined" size="small"
                            InputProps={{ startAdornment: <InputAdornment position="start"><LockIcon/></InputAdornment> }}
                            className={classes.passwordField} />

                        <div className={classes.buttonHeightSpacing} />

                        <Button color="primary" variant="contained">
                            Login
                        </Button>
                    </div>

                    {/* Bottom buttons */}   
                    <div>             
                        <Grid container justify="center" spacing={2}>
                            <Grid item className={classes.backToWelcomeButtonGrid}>
                                <Button variant="outlined" href="/welcome" color="primary" className={classes.backToWelcomeButton}>
                                    Back to welcome page
                                </Button>
                            </Grid>

                            <Grid item className={classes.signUpButtonGrid}>
                                <Button variant="outlined" href="/signup" color="secondary" className={classes.signUpButton}>
                                    Sign up here
                                </Button>
                            </Grid>
                            
                            <Grid item className={classes.forgetPasswordButtonGrid}>
                                <Button variant="outlined" className={classes.forgetPasswordButton}>
                                    Forgot Password?
                                </Button>
                            </Grid>
                        </Grid>      
                    </div>                            
                </Grid>
            </Grid>
        </div>
    );
}