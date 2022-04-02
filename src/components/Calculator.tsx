import { Grid, Typography, makeStyles } from '@material-ui/core';
import React, { ChangeEvent, Fragment, useState } from 'react';
import CalculatorSelect from './CalculatorSelect';
import { calculateLevelingCost } from '../services/Calculator';
import { levelingCosts } from '../constants/LevelingCost';
import numeral from 'numeral';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  levelLabel: {
    color: theme.palette.primary.main,
    fontSize: 18,
  },
  rightAlignItem: {
    justifyItems: 'flex-end' 
  }
}));

const Calculator: React.FC = () => {
  const classes = useStyles();
  const [startingLevel, setStartingLevel] = useState(1);
  const [desiredLevel, setDesiredLevel] = useState(1);

  const handleStartingLevelChange = (event: ChangeEvent<{ value: unknown }>) => {
    const newLevel = Number(event.target.value);

    setStartingLevel(newLevel);
  };

  const handleDesiredLevelChange = (event: ChangeEvent<{ value: unknown }>) => {
    const newLevel = Number(event.target.value);

    setDesiredLevel(newLevel);
  };

  return (
    <Fragment>
      <CalculatorSelect 
        handleUpgrade={handleStartingLevelChange}
        upgradeCosts={levelingCosts}
        upgradeLabel={'Starting Level'}
        upgradeValue={startingLevel}
      />
      <CalculatorSelect 
        handleUpgrade={handleDesiredLevelChange}
        upgradeCosts={levelingCosts}
        upgradeLabel={'Desired Level'}
        upgradeValue={desiredLevel}
      />
      <Grid className={classes.container} container>
        <Grid item xs={2}>
          <Typography className={classes.levelLabel}>
            {'Total Cost'}
          </Typography>
        </Grid>
        <Grid className={classes.rightAlignItem} item xs={1}>
          <Typography className={classes.levelLabel}>
            {numeral(calculateLevelingCost(startingLevel, desiredLevel)).format('0,0')}
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Calculator;