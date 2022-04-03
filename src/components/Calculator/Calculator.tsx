import { Card, CardContent, CardHeader, makeStyles, Typography } from '@material-ui/core';
import numeral from 'numeral';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { levelingCosts } from '../../constants/LevelingCost';
import { changeDesiredLevel, changeStartingLevel } from '../../features/QuickCalculatorSlice';
import { calculateLevelingCost } from '../../services/Calculator';
import { RootState } from '../../store';
import { CalculatorSelect, CalculatorTotal } from '../index';

const useStyles = makeStyles(theme => ({
  calculatorCard: {
    display: 'inline-block',
    margin: theme.spacing(2),
    textAlign: 'center'
  }
}));

const Calculator: React.FC = () => {
  const classes = useStyles();
  const startingLevel = useSelector((state: RootState) => state.quickCalculator.startingLevel);
  const desiredLevel = useSelector((state: RootState) => state.quickCalculator.desiredLevel);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const handleStartingLevelChange = (level: number) => {
    if (level > desiredLevel) {
      setErrorMessage('Starting level cannot be greater than desired level');
      return;
    }

    dispatch(changeStartingLevel(level));
    setErrorMessage('');
  };

  const handleDesiredLevelChange = (level: number) => {
    if (level < startingLevel) {
      setErrorMessage('Desired level cannot be less than starting level');
      return;
    }

    dispatch(changeDesiredLevel(level));
    setErrorMessage('');
  };

  return (
    <Card className={classes.calculatorCard}>
      <CardHeader
        title="Quick Calculator"
      />
      <CardContent>
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
        <CalculatorTotal 
          totalCostFormattedValue={numeral(calculateLevelingCost(startingLevel, desiredLevel)).format('0,0')}
          totalCostLabel={'Total Cost'}
        />
        {errorMessage.length ? <Typography>{errorMessage}</Typography> : null}
      </CardContent>
    </Card>
  );
};

export default Calculator;