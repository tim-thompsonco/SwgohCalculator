import CalculatorSelect from './CalculatorSelect';
import React from 'react';
import { levelingCosts } from '../constants/LevelingCost';
import { render } from '@testing-library/react';

test('Renders CalculatorSelect component', () => {
  const mockHandleUpgrade = jest.fn();

  render(
    <CalculatorSelect 
      handleUpgrade={mockHandleUpgrade}
      upgradeCosts={levelingCosts}
      upgradeLabel={'Test Label'}
      upgradeValue={50}
    />
  );
});