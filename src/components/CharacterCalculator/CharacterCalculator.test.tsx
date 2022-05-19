import { render } from '@testing-library/react';
import React from 'react';

import CharacterCalculator from './CharacterCalculator';

describe('CharacterCalculator component', () => {
  test('Smoke test', () => {
    const mockHandleChange = jest.fn();
    const mockProps = {
      currentCharacter: 'Test Character',
      unitsList: {},
      currentLevel: 1,
      targetLevel: 85
    };
      
    render(
      <CharacterCalculator
        currentCharacter={mockProps.currentCharacter}
        currentLevel={mockProps.currentLevel}
        handleCurrentLevelChange={mockHandleChange}
        handleTargetLevelChange={mockHandleChange}
        handleUnitChange={mockHandleChange}
        targetLevel={mockProps.targetLevel}
        unitsList={mockProps.unitsList}
      />
    );
  });
});