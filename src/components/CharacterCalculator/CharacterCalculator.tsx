import {  Box, Grid, makeStyles } from '@material-ui/core';
import React from 'react';

import { levelingCosts } from '../../constants/LevelingCost';
import { CalculatorSelect } from '../index';
import UnitsSelect from '../UnitsSelect/UnitsSelect';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center'
  },
}));

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
  const classes = useStyles();

  return (
    <Grid className={classes.container} container spacing={3}>
      <Grid item xs={6}>
        <UnitsSelect 
          handleChange={handleUnitChange}
          selectLabel={'Character'}
          selectOptions={unitsList}
          selectValue={currentCharacter}
        />
      </Grid>
      <Grid item xs={3}>
        <Box display={'flex'} justifyContent={'flex-end'}>
          <CalculatorSelect 
            handleChange={handleCurrentLevelChange}
            selectLabel={'Current Level'}
            selectOptions={levelingCosts}
            selectValue={currentLevel}
          />
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box display={'flex'} justifyContent={'flex-end'}>
          <CalculatorSelect 
            handleChange={handleTargetLevelChange}
            selectLabel={'Target Level'}
            selectOptions={levelingCosts}
            selectValue={targetLevel}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default CharacterCalculator;