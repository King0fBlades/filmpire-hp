import { makeStyles } from '@mui/styles';

const drawerWidth = 240;

export default makeStyles((theme) => ({
	toolbar: {
		height: '80px',
		display: 'flex',
		justifyContent: ' space-between',
		marginLeft: '240px',
		[theme.breakpoints.down('md')]: {
			marginLeft: 0,
			flexWrap: 'wrap',
		},
	},
	menuButton: {
		marginRight: theme.spacing(0),
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	drawer: {
		[theme.breakpoints.up('md')]: {
			width: drawerWidth,
			flexShrink: '0',
		},
	},
	drawerPaper: {
		width: drawerWidth,
	},
	linkButton: {
		minWidth: 'none',
		minHeight: 'none',
		'&:hover': {
			color: 'white !important',
			textDecoration: 'none',
		},
	},
}));
