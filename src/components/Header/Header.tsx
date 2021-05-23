import { FC } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';

import styles from './styles/header';

const Header: FC = (): JSX.Element => {
    const classes = styles({});

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap className={classes.title}>
                        React MUI Theme POC
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;