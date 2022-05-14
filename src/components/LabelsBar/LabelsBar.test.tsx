import { render } from '@testing-library/react';
import React from 'react';

import LabelsBar from './LabelsBar';

describe('LabelsBar component', () => {
  test('Smoke test', () => {
    render(
      <LabelsBar />
    );
  });
});