import AppBar from '@material-ui/core/AppBar';
import React from 'react';

import AppLogo from '../AppLogo/AppLogo';

const NavBar: React.FC = () => {
  return (
    <AppBar color={'transparent'} position={'static'}>
      <AppLogo />
    </AppBar>
  );
};

export default NavBar;