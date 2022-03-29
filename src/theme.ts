import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffe81f',
    },
    background: {
      default: '#000000',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;