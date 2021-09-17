import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
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
		[theme.breakpoints.down('sm')]: {
			top: "30%",
			right: "15%",
			height: "230px",
			width: "230px",
			filter: "blur(28px)",
		},
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
		[theme.breakpoints.down('sm')]: {
			top: "50%",
			right: "45%",
			height: "140px",
			width: "140px",
			filter: "blur(28px)",
		},
	},
	title : {
		marginLeft: "1em", 
    color: "white",
		zIndex: "9",
		
		[theme.breakpoints.down('sm')]: {
			marginLeft: ".1em", 
			lineHeight: "80px",
			fontSize: "2.5em",
			textAlign: "center"
		},
		[theme.breakpoints.between('sm', 'md')]: {
			marginLeft: ".5em", 
			lineHeight: "60px",
			fontSize: "3.3em",
		},
		[theme.breakpoints.between('md', 'lg')]: {
			lineHeight: "70px",
			fontSize: "4.5em",
		},
		[theme.breakpoints.up('lg')]: {
			lineHeight: "90px",
			fontSize: "6em",
			
		}
	},
}))

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
