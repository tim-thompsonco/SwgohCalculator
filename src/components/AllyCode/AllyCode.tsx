import { Button, CircularProgress, Grid, makeStyles, TextField } from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { hydratePlayerRoster, PlayerUnit } from '../../features/PlayerRosterSlice';
import api from '../../services/Axios';

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
  const [isLoading, setIsLoading] = useState(false);
  const [allyCode, setAllyCode] = useState(0);
  const dispatch = useDispatch();

  const getPlayerRoster = async () => {
    setIsLoading(true);
    const response = await api.get(`/roster/${allyCode}`);
    const playerRoster: Record<string, PlayerUnit> = response.data;
  
    dispatch(hydratePlayerRoster(playerRoster));
    setIsLoading(false);
  };

  const changeAllyCode = (event: ChangeEvent<{ value: unknown }>) => {
    setAllyCode(event.target.value as number);
  };

  return (
    <Grid className={classes.root} container spacing={2}>
      <Grid item xs={8}>
        <TextField
          id={'AllyCodeTextField'}
          onChange={changeAllyCode}
          placeholder={'Enter ally code'}
          size={'small'}
          variant={'outlined'}
        />
      </Grid>
      <Grid item xs={4}>
        {isLoading ?
          <CircularProgress color={'secondary'} />
          :
          <Button 
            color={'secondary'} 
            onClick={getPlayerRoster}
            variant={'contained'}
          >Go
          </Button>}
      </Grid>
    </Grid>
  );
};

export default AllyCode;