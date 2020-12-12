import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Grid, TextField, Typography, Button, Paper, InputAdornment, Toolbar, AppBar } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        background: '#F7F7F7',
    },
    detailsPaper: {
        width: '50vw',
        height: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    contentDiv: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '300',
        maxWidth: '400',
    },
    fields: {
        minWidth: '40vw',
    },
    createAccountTitle: {
        fontFamily: 'Fira Sans',
    },
    webName: {
        fontFamily: 'Nunito',
        // pushes the login button to the end
        flex: '1'        
    },
    webNameGrid: {
        paddingBottom: '1em'
    },
    createAccountTitleGrid: {
        paddingBottom: '1em'
    },
    loginButton: {
        textTransform: 'capitalize',
    },
    buttonHeightSpacing: {
        height: '10px'
    },
}
));

export default function SignUpPage() {
    const classes = useStyles();
    return (
        <div>
            <CssBaseline />
            <Grid className={classes.mainGrid} alignItems="center" direction="column" justify="space-between">

                <Grid item className={classes.webNameGrid}>
                    <AppBar position="static">
                        <Toolbar variant="dense">
                            <Typography variant="h6" color="inherit" className={classes.webName}>
                                chef in the making.
                            </Typography>
                            <Button href="/login" variant="contained" className={classes.loginButton}>
                                Login
                            </Button>
                        </Toolbar>
                    </AppBar>
                </Grid>

                <Grid item className={classes.createAccountTitleGrid}>
                    <Typography align='center' variant='h2' className={classes.createAccountTitle}>
                        Create your account here
                    </Typography>
                </Grid>

                <Grid container className={classes.paperGrid} alignItems="center" direction="column" justify="space-between">
                    <Paper elevation={3} className={classes.detailsPaper}>
                        <div className={classes.contentDiv}>
                            <TextField label="Username" margin="normal" variant="outlined" size="small"
                                InputProps={{ startAdornment: <InputAdornment position="start"><AccountCircleIcon /></InputAdornment> }}
                                className={classes.fields} />

                            <TextField label="Email" margin="normal" variant="outlined" size="small"
                                InputProps={{ startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment> }}
                                className={classes.fields} />

                            <TextField label="Password" margin="normal" variant="outlined" size="small"
                                InputProps={{ startAdornment: <InputAdornment position="start"><LockIcon /></InputAdornment> }}
                                className={classes.fields} />

                            <TextField label="Re-type Password" margin="normal" variant="outlined" size="small"
                                InputProps={{ startAdornment: <InputAdornment position="start"><LockIcon /></InputAdornment> }}
                                helperText="Note that passwords have to be at least 8 characters long"
                                className={classes.fields} />

                            <div className={classes.buttonHeightSpacing} />

                            <Button color="primary" variant="contained">
                                Sign up
                            </Button>
                        </div>
                    </Paper>

                </Grid>
            </Grid>

        </div>
    );
}
