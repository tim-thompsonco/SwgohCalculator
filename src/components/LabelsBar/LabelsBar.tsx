import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center'
  },
}));

const LabelsBar: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.container} container spacing={3}>
      <Grid item xs={6}>
        <Typography>
          {'Character'}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography>
          {'Current Level'}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography>
          {'Target Level'}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LabelsBar;