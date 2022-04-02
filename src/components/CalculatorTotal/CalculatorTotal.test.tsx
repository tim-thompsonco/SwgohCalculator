import { render } from '@testing-library/react';
import React from 'react';

import CalculatorTotal from './CalculatorTotal';

describe('CalculatorTotal component', () => {
  test('Smoke test', () => {
    render(
      <CalculatorTotal 
        totalCostFormattedValue={'1,000'}
        totalCostLabel={'Test Label'}
      />
    );
  });
});
