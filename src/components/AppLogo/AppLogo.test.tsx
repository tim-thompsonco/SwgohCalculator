import { render } from '@testing-library/react';
import React from 'react';

import AppLogo from './AppLogo';

describe('AppLogo component', () => {
  test('Smoke test', () => {
    render(
      <AppLogo />
    );
  });
});