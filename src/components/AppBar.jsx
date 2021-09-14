import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {ReactComponent as MenuIcon} from '../svgicons/menuIcon.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    border: 0,
    flexGrow: 1,
    boxShadow: "none",
  },
  toolbar : {
    display: "flex",
    justifyContent: "space-between",
    padding: 0
  },
  brand : {
    margin: ".7em 0 0 1em",
    fontFamily: "Fredoka One",
    fontWeight: "lighter",
    fontSize: "2.5em",
    color: "white",
  },
  menuButton: {
    padding: "2em 3em 0 0",
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" color="transparent" className={classes.root}>
        <Toolbar className={classes.toolbar}>

          <h6 className={classes.brand}>
            bites
          </h6>

          <MenuIcon className={classes.menuButton} />

        </Toolbar>
      </AppBar>
    </>
  );
}