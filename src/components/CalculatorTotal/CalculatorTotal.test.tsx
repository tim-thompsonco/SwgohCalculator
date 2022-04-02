import { render } from '@testing-library/react';
import React from 'react';

import CalculatorTotal from './CalculatorTotal';

test('Renders CalculatorTotal component', () => {
  render(
    <CalculatorTotal 
      totalCostFormattedValue={'1,000'}
      totalCostLabel={'Test Label'}
    />
  );
});