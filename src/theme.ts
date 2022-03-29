import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const COLORS = {
  starWarsGold: '#ffe81f',
  black: '#000000',
  darkGrey: '#404040'
};

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.starWarsGold
    },
    background: {
      default: COLORS.black,
      paper: COLORS.darkGrey
    },
    text: {
      primary: COLORS.starWarsGold
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        outlined: {
          backgroundColor: COLORS.darkGrey,
          border: `2 solid ${COLORS.starWarsGold}`,
        }
      }
    }
  }
});

export default theme;