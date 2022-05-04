import {
  Box,
  Grid, makeStyles, 
  MenuItem, TextField, Typography } from '@material-ui/core';
import React, { ChangeEvent } from 'react';

import { convertLabelToId } from '../../utilities/Utilities';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  form: {
    margin: theme.spacing(1, 0)
  },
  levelLabel: {
    fontSize: 18
  }
}));

interface ICalculatorSelectProps {
    handleUpgrade(level: number):  void,
    upgradeCosts: Record<number, number>,
    upgradeLabel: string,
    upgradeValue: number
}

const CalculatorSelect: React.FC<ICalculatorSelectProps> = ({
  handleUpgrade, upgradeCosts, upgradeLabel, upgradeValue 
}) => {
  const classes = useStyles();

  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    const newLevel = Number(event.target.value);

    handleUpgrade(newLevel);
  };

  return (
    <Grid className={classes.container} container spacing={2}>
      <Grid item xs={8}>
        <Typography className={classes.levelLabel}>
          {upgradeLabel}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Box
          className={classes.form} 
          component={'form'}
          display={'flex'}
          justifyContent={'flex-end'}
        >
          <TextField
            defaultValue={1}
            id={convertLabelToId(upgradeLabel)}
            onChange={handleChange}
            select
            value={upgradeValue}
            variant={'outlined'}
          >
            {Object.keys(upgradeCosts).map((upgradeCost: string) => {
              return <MenuItem id={upgradeCost} key={upgradeCost} value={upgradeCost}>{upgradeCost}</MenuItem>;
            })}
          </TextField>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CalculatorSelect;