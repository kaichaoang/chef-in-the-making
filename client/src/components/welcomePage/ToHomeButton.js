import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(0, 65, 7, 65),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flexGrow: '1',        
    },
    toHomeButton: {
        fontFamily: 'Nunito',
        textTransform: 'capitalize',
    }
}));

export default function ToLoginButton() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button className={classes.toLoginButton} href="/login" variant="contained"
                endIcon={<ArrowForwardIcon />} size='large'>
                Sizzle now!
            </Button>
        </div>
    );
}
