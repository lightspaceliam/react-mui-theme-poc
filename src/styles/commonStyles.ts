import { CSSProperties } from '@material-ui/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';

/**
 * Default Colours.
 */
 export const primaryGrey: string = blueGrey[700];
 export const primaryWhite: string = '#FFFFFF';

 /**
  * Common HTML styles
  */
export const anchor: CSSProperties = {
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'underline',
    },
};