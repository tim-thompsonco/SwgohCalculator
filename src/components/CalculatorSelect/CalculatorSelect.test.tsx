import { render } from '@testing-library/react';
import React from 'react';

import { levelingCosts } from '../../constants/LevelingCost';
import CalculatorSelect from './CalculatorSelect';

describe('CalculatorSelect component', () => {
  test('Smoke test', () => {
    const mockHandleChange = jest.fn();
      
    render(
      <CalculatorSelect 
        handleChange={mockHandleChange}
        selectLabel={'Test Label'}
        selectOptions={levelingCosts}
        selectValue={50}
      />
    );
  });
});