import { ThemeProvider } from '@material-ui/styles'
import myTheme from './themeConfig'
import { makeStyles } from '@material-ui/core'
import AppBar from './components/AppBar.jsx'
import Home from './components/Home.jsx'


const useStyles = makeStyles({
	root: {
		background: "linear-gradient(90deg, rgba(161, 99, 240, 1), rgba(44, 15, 224, 1))",
	},
	mainContainer : {
		display: "grid",
		// alignItems: "center",
		minHeight: "100vh",
		width: "100vw",
		background: "transparent",
		backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.36) 1px, transparent 1px)",
		backgroundSize: "350px",
		backgroundPosition: "260px",
	},
  redCircle : {
		position: "absolute",
		top: "25%",
		right: "29%",
		background: "rgb(255, 0, 46)",
		height: "350px",
		width: "350px",
		borderRadius: "50%",
		filter: "blur(40px)",
		zIndex: "0",
	},
	blueCircle : {
		position: "absolute",
		top: "50%",
		right: "50%",
		background: "rgb(0, 133, 255)",
		height: "200px",
		width: "200px",
		borderRadius: "50%",
		filter: "blur(40px)",
		zIndex: "0",
	},
})

export default function App() {
  const classes = useStyles()

	return (
    <ThemeProvider theme={myTheme}>

      <div className={classes.root}>
        <section className={classes.mainContainer}>

          <AppBar />

          <Home />
          
        </section>

      </div>

    </ThemeProvider>

	);
}
