import { render } from '@testing-library/react';
import React from 'react';

import Calculator from './Calculator';

describe('Calculator component', () => {
  test('Smoke test', () => {
    render(<Calculator />);
  });
});
