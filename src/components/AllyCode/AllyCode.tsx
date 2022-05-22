import { Button, Grid, makeStyles, TextField } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(1)
  }
}));

const AllyCode: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container spacing={2}>
      <Grid item xs={8}>
        <TextField
          id={'AllyCodeTextField'}
          placeholder={'Enter ally code'}
          size={'small'}
          variant={'outlined'}
        />
      </Grid>
      <Grid item xs={4}>
        <Button color={'secondary'} variant={'contained'}>Go</Button>
      </Grid>
    </Grid>
  );
};

export default AllyCode;