import { createTheme } from '@material-ui/core';

const COLORS = {
  starWarsGold: '#ffe81f',
  black: '#000000',
  darkGrey: '#404040'
};

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.starWarsGold,
    },
    secondary: {
      main: COLORS.darkGrey
    },
    background: {
      default: COLORS.black,
      paper: COLORS.darkGrey
    },
    text: {
      primary: COLORS.starWarsGold,
    }
  }
});

export default theme;