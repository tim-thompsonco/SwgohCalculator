import { render } from '@testing-library/react';
import React from 'react';

import ErrorFallback from './ErrorFallback';

test('Renders CalculatorTotal component', () => {
  const mockError = new Error();
  const mockResetErrorBoundary = jest.fn();

  render(
    <ErrorFallback error={mockError} resetErrorBoundary={mockResetErrorBoundary} />
  );
});