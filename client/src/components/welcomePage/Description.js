import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ToLoginButton from './ToHomeButton';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(7, 20, 0, 20),
        height: 200,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flexGrow: '1',
    },
    webName: {
        fontFamily: 'Nunito',
    },
    description: {
        fontFamily: 'Nunito',
    },
}));

export default function Description() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                <Typography className={classes.webName} align='center' variant='h2'>
                    chef in the making.
                </Typography>
                <Typography className={classes.description} align='center' variant='h5'>
                    perfect your recipe here today
                </Typography>
            </div>
            <div>
                <ToLoginButton></ToLoginButton>
            </div>
        </div>
    );
}
