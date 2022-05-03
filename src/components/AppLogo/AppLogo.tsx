import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import SwgohCalculatorLogo from '../../assets/images/logo.png';

const useStyles = makeStyles((theme) => ({
  logo: {
    maxHeight: 'auto',
    maxWidth: theme.breakpoints.down('sm') ? '100%' : '50%'
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: theme.breakpoints.down('sm') ? 'center' : 'flex-start'
  }
}));

const AppLogo: React.FC = () => {
  const classes = useStyles();
    
  return (
    <Grid className={classes.logoContainer} container>
      <Grid item xs={12}>
        <img className={classes.logo} src={SwgohCalculatorLogo} />
      </Grid>
    </Grid>
  );
};

export default AppLogo;