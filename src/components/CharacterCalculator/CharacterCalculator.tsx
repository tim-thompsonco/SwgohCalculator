import {  Grid } from '@material-ui/core';
import React from 'react';

import { levelingCosts } from '../../constants/LevelingCost';
import { CalculatorSelect } from '../index';
import UnitsSelect from '../UnitsSelect/UnitsSelect';

interface ICharacterCalculatorProps {
    currentCharacter: string,
    unitsList: Record<string, string>,
    currentLevel: number,
    targetLevel: number,
    handleUnitChange(unit: string): void,
    handleCurrentLevelChange(level: number): void,
    handleTargetLevelChange(level: number): void
}

const CharacterCalculator: React.FC<ICharacterCalculatorProps> = ({ 
  currentCharacter, 
  unitsList,
  currentLevel,
  targetLevel,
  handleUnitChange,
  handleCurrentLevelChange, 
  handleTargetLevelChange }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <UnitsSelect 
          handleChange={handleUnitChange}
          selectLabel={'Character'}
          selectOptions={unitsList}
          selectValue={currentCharacter}
        />
      </Grid>
      <Grid item xs={3}>
        <CalculatorSelect 
          handleChange={handleCurrentLevelChange}
          selectLabel={'Current Level'}
          selectOptions={levelingCosts}
          selectValue={currentLevel}
        />
      </Grid>
      <Grid item xs={3}>
        <CalculatorSelect 
          handleChange={handleTargetLevelChange}
          selectLabel={'Target Level'}
          selectOptions={levelingCosts}
          selectValue={targetLevel}
        />
      </Grid>
    </Grid>
  );
};

export default CharacterCalculator;