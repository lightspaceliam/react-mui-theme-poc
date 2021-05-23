import { createMuiTheme } from "@material-ui/core";
import h1 from './typography/h1';
import h2 from './typography/h2';
import body1 from './typography/body1';
import MuiAppBar from './overrides/MuiAppBar';

const theme = createMuiTheme({
    typography: {
        h1,
        h2,
        body1,
    },
    overrides: {
        MuiAppBar,
    },
});

export default theme;