import { render } from '@testing-library/react';
import React from 'react';

import NavBar from './NavBar';

describe('NavBar component', () => {
  test('Smoke test', () => {
    render(
      <NavBar />
    );
  });
});