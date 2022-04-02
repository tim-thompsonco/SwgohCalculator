import CalculatorTotal from './CalculatorTotal';
import React from 'react';
import { render } from '@testing-library/react';

test('Renders CalculatorTotal component', () => {
  render(
    <CalculatorTotal 
      totalCostFormattedValue={'1,000'}
      totalCostLabel={'Test Label'}
    />
  );
});