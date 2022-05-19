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
  },
  typography: {
    h1: {
      fontSize: 28
    },
    h2: {
      fontSize: 26
    },
    h3: {
      fontSize: 24
    },
    h4: {
      fontSize: 22
    },
    h5: {
      fontSize: 20
    },
    h6: {
      fontSize: 18
    }
  }
});

export default theme;