import { render } from '@testing-library/react';
import React from 'react';

import { levelingCosts } from '../../constants/LevelingCost';
import CalculatorSelect from './CalculatorSelect';

describe('CalculatorSelect component', () => {
  test('Smoke test', () => {
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
});