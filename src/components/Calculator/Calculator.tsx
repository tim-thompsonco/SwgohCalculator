import { Card, CardContent, CardHeader, makeStyles } from '@material-ui/core';
import numeral from 'numeral';
import React from 'react';
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
  const dispatch = useDispatch();

  const handleStartingLevelChange = (level: number) => {
    dispatch(changeStartingLevel(level));
  };

  const handleDesiredLevelChange = (level: number) => {
    dispatch(changeDesiredLevel(level));
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
      </CardContent>
    </Card>
  );
};

export default Calculator;