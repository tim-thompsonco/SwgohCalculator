import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import SwgohCalculatorLogo from '../../assets/images/logo.png';

const useStyles = makeStyles(() => ({
  logo: {
    height: 100,
    width: 1000
  }
}));

const AppLogo: React.FC = () => {
  const classes = useStyles();
    
  return (
    <img className={classes.logo} src={SwgohCalculatorLogo} />
  );
};

export default AppLogo;