import { ThemeProvider } from '@material-ui/styles'
import myTheme from './themeConfig'
import { makeStyles } from '@material-ui/core'
import AppBar from './components/AppBar.jsx'
import Home from './components/Home.jsx'


const useStyles = makeStyles((theme) => ({
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
}))

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
