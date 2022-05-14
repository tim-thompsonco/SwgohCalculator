import { render } from '@testing-library/react';
import React from 'react';

import UnitsSelect from './UnitsSelect';

describe('UnitsSelect component', () => {
  test('Smoke test', () => {
    const mockHandleChange = jest.fn();
    const mockProps = {
      selectLabel: 'Test Label',
      selectOptions: {},
      selectValue: 'Test Character',
    };

    render(
      <UnitsSelect
        handleChange={mockHandleChange}
        selectLabel={mockProps.selectLabel}
        selectOptions={mockProps.selectOptions}
        selectValue={mockProps.selectValue}
      />
    );
  });
});