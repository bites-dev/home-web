import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
	// root: {
	// 	background: "linear-gradient(90deg, rgba(161, 99, 240, 1), rgba(44, 15, 224, 1))",
	// },
	// mainContainer : {
	// 	display: "flex",
	// 	alignItems: "center",
	// 	minHeight: "100vh",
	// 	width: "100vw",
	// 	background: "transparent",
	// 	backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.36) 1px, transparent 1px)",
	// 	backgroundSize: "350px",
	// 	backgroundPosition: "260px",
	// },
	redCircle : {
		position: "absolute",
		top: "24%",
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
		right: "44%",
		background: "rgb(0, 133, 255)",
		height: "170px",
		width: "170px",
		borderRadius: "50%",
		filter: "blur(40px)",
		zIndex: "0",
	},
	title : {
		marginLeft: "1em", 
    color: "white",
		fontSize: "6em",
		lineHeight: "90px",
		zIndex: "9",
	},
})

export default function Home() {
	const classes = useStyles()

	return(
		<>
				<div className={classes.redCircle} />
				<div className={classes.blueCircle} />

				<h1 className={classes.title}>
					WE HELP AMBITIOUS<br/>
					BRANDS SELL MORE<br/>
					PRODUCT.
				</h1>

		</>
	)
}
