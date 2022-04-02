import numeral from 'numeral';
import React, { ChangeEvent, Fragment, useState } from 'react';

import { levelingCosts } from '../../constants/LevelingCost';
import { calculateLevelingCost } from '../../services/Calculator';
import { CalculatorSelect, CalculatorTotal } from '../index';

const Calculator: React.FC = () => {
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
      <CalculatorTotal 
        totalCostFormattedValue={numeral(calculateLevelingCost(startingLevel, desiredLevel)).format('0,0')}
        totalCostLabel={'Total Cost'}
      />
    </Fragment>
  );
};

export default Calculator;