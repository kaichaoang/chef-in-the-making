import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, Typography, Button, IconButton, AppBar, CssBaseline} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>

          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            chef in the making
          </Typography>

          <Button color="inherit" href="/login">Login</Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}