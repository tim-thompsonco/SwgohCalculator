import { render } from '@testing-library/react';
import React from 'react';

import ErrorFallback from './ErrorFallback';

describe('ErrorFallback component', () => {
  test('Smoke test', () => {
    const mockError = new Error();
    const mockResetErrorBoundary = jest.fn();
      
    render(
      <ErrorFallback error={mockError} resetErrorBoundary={mockResetErrorBoundary} />
    );
  });
});
