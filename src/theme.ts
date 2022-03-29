import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffe81f',
    },
    secondary: {
      main: '#ffe81f',
    },
    background: {
      default: '#000000',
      paper: '#404040'
    },
    text: {
      primary: '#ffe81f'
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: 'background.paper'
        }
      }
    }
  }
});

export default theme;