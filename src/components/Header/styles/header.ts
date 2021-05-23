import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

type Classes = 'root'
	| 'title'
	| 'appBar'
	| 'appBarShift'
	| 'menuButton'
	| 'hide';
type Props = { };

const drawerWidth = 240;

const styles = makeStyles<Theme, Props, Classes>(
	(theme: Theme) => createStyles<Classes, Props>({
		root: {
			display: 'flex',
			flexGrow: 1,
		},
		title: {
			flexGrow: 1,
		},
		appBar: {
			transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
			}),
		},
		appBarShift: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
			transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
			}),
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		hide: {
			display: 'none',
		},
	}),
);

export default styles;