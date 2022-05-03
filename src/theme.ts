import { createTheme } from '@material-ui/core';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#000000',
      contrastText: '#FFE81F',
    },
    secondary: {
      main: '#FFE81F'
    },
    background: {
      default: '#1A1A1A',
      paper: '#3D3D3D'
    },
    text: {
      primary: '#FFE81F'
    }
  }
});

export default theme;