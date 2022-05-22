import { Grid } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import React from 'react';

import AllyCode from '../AllyCode/AllyCode';
import AppLogo from '../AppLogo/AppLogo';

const NavBar: React.FC = () => {
  return (
    <AppBar position={'static'}>
      <Grid alignItems={'center'} container justifyContent={'space-between'}>
        <Grid item lg={8} xs={12}>
          <AppLogo />
        </Grid>
        <Grid item md={3} sm={4} xs={8}>
          <AllyCode />
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default NavBar;