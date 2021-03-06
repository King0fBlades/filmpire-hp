import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
	containerSpaceAround: {
		display: 'flex',
		justifyContent: 'space-around',
		margin: '10px 0 !important',
		flexWrap: 'wrap',
		[theme.breakpoints.down('md')]: {
			flexDirection: 'column',
			flexWrap: 'wrap',
		},
	},
	poster: {
		borderRadius: '20px',
		boxShadow: '0.5em 1em 1em rgb(64, 64, 70)',
		width: '90%',
		[theme.breakpoints.down('lg')]: {
			display: 'flex',
			alignItems: 'center',
			margin: '0 auto',
			width: '50%',
			marginBottom: '30px',
		},
		[theme.breakpoints.down('sm')]: {
			margin: '0 auto',
			width: '100%',
			height: '350px',
			marginBottom: '30px',
		},
	},
	genresContainer: {
		margin: '10px 0 !important',
		display: 'flex',
		justifyContent: 'space-around',
		flexWrap: 'wrap',
	},
	genreImage: {
		filter: theme.palette.mode === 'dark' && 'invert(1)',
		marginRight: '10px',
	},
	links: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		textDecoration: 'none',
		[theme.breakpoints.down('md')]: {
			padding: '0.5rem 1rem',
		},
	},
	castImage: {
		width: '100%',
		maxWidth: '7em',
		height: '8em',
		objectFit: 'cover',
		borderRadius: '10px',
	},
	buttonsContainer: {
		display: 'flex',
		justifyContent: 'space-around',
		width: '100%',
		[theme.breakpoints.down('xl')]: {
			flexDirection: 'column',
			justifyContent: 'center',
			margin: ' 5px 0 !important',
		},
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	video: {
		width: '50%',
		height: '50%',
		pointerEvents: 'auto',
		[theme.breakpoints.down('md')]: {
			width: '90%',
			height: '90%',
		},
	},
}));
