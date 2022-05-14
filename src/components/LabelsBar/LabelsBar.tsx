import { Grid, Typography } from '@material-ui/core';
import React from 'react';

const LabelsBar: React.FC = () => {
  return (
    <Grid alignItems={'center'} container spacing={3}>
      <Grid item xs={6}>
        <Typography variant={'h6'}>
          {'Character'}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant={'h6'}>
          {'Current Level'}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant={'h6'}>
          {'Target Level'}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LabelsBar;