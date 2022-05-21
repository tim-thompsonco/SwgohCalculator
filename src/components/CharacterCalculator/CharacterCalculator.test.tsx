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
      targetLevel: 85,
      isLoading: false
    };
      
    render(
      <CharacterCalculator
        currentCharacter={mockProps.currentCharacter}
        currentLevel={mockProps.currentLevel}
        handleCurrentLevelChange={mockHandleChange}
        handleTargetLevelChange={mockHandleChange}
        handleUnitChange={mockHandleChange}
        isLoading={mockProps.isLoading}
        targetLevel={mockProps.targetLevel}
        unitsList={mockProps.unitsList}
      />
    );
  });
});