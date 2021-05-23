import {
    createStyles, makeStyles, Theme,
} from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import { anchor } from '../theme/commonStyles';

type Classes = 'anchor'
    | 'main'
    | 'paper';
type Props = { };

const styles = makeStyles<Theme, Props, Classes>(
    (theme : Theme) => createStyles<Classes, Props>({
        anchor: {
            ...anchor,
            color: red[600],
            fontWeight: 'bold',
        },
        main: {
            marginTop: '84px',
        },
        paper: {
            padding: '1.5rem',
            marginBottom: '0.5rem',
        },
    }),
);

export default styles;