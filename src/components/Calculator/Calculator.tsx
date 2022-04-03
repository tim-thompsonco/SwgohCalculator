import { Card, CardContent, makeStyles } from '@material-ui/core';
import numeral from 'numeral';
import React, { ChangeEvent, useState } from 'react';

import { levelingCosts } from '../../constants/LevelingCost';
import { calculateLevelingCost } from '../../services/Calculator';
import { CalculatorSelect, CalculatorTotal } from '../index';

const useStyles = makeStyles(theme => ({
  calculatorCard: {
    margin: theme.spacing(1)
  }
}));

const Calculator: React.FC = () => {
  const classes = useStyles();

  const [startingLevel, setStartingLevel] = useState(1);
  const [desiredLevel, setDesiredLevel] = useState(85);

  const handleStartingLevelChange = (event: ChangeEvent<{ value: unknown }>) => {
    const newLevel = Number(event.target.value);

    setStartingLevel(newLevel);
  };

  const handleDesiredLevelChange = (event: ChangeEvent<{ value: unknown }>) => {
    const newLevel = Number(event.target.value);

    setDesiredLevel(newLevel);
  };

  return (
    <Card className={classes.calculatorCard}>
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