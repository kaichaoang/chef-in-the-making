import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Background from '../../resources/images/welcome.jpg';
import Description from './Description';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'calc(100%) calc(65%)',
        flexGrow: '1',
    }
}));

export default function WelcomePage() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Description></Description>
        </div>
    );
}