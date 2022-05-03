import {
  Box,
  FormControl, Grid, makeStyles, 
  MenuItem, Select, Typography } from '@material-ui/core';
import React, { ChangeEvent } from 'react';

import { convertLabelToId } from '../../utilities/Utilities';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  formControl: {
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
    <Grid className={classes.container} container>
      <Grid item justifyContent="flex-start" xs={8}>
        <Typography className={classes.levelLabel}>
          {upgradeLabel}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Box display="flex" justifyContent="flex-end">
          <FormControl className={classes.formControl} variant="filled">
            <Select
              defaultValue={1}
              id={convertLabelToId(upgradeLabel)}
              onChange={handleChange}
              value={upgradeValue}
            >
              {Object.keys(upgradeCosts).map((upgradeCost: string) => {
                return <MenuItem id={upgradeCost} key={upgradeCost} value={upgradeCost}>{upgradeCost}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CalculatorSelect;