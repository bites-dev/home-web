import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

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

		[theme.breakpoints.down('sm')]: {
			margin: ".2em 0 0 .5em",
		},
  },
  menuButton: {
    padding: "2em 3em 0 0",
		height: 50,
		width: 50,

		[theme.breakpoints.down('sm')]: {
			padding: "1em 1.5em 0 0",
			// height: 50,
			// width: 50,
		},
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

					<svg fill="#fff" className={classes.menuButton} >
						<path d="M 5 9 L 5 11 L 45 11 L 45 9 L 5 9 z M 5 24 L 5 26 L 45 26 L 45 24 L 5 24 z M 5 39 L 5 41 L 45 41 L 45 39 L 5 39 z"/>
					</svg>

        </Toolbar>
      </AppBar>
    </>
  );
}