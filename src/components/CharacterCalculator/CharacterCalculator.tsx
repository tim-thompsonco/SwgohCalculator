import { CircularProgress, Grid, makeStyles } from '@material-ui/core';
import React from 'react';

import { levelingCosts } from '../../constants/LevelingCost';
import { CalculatorSelect } from '../index';
import UnitsSelect from '../UnitsSelect/UnitsSelect';


const useStyles = makeStyles((theme) => ({
  spinner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(1, 0, 0)
  }
}));

interface ICharacterCalculatorProps {
    currentCharacter: string,
    unitsList: Record<string, string>,
    currentLevel: number,
    targetLevel: number,
    isLoading: boolean,
    handleUnitChange(unit: string): void,
    handleCurrentLevelChange(level: number): void,
    handleTargetLevelChange(level: number): void
}

const CharacterCalculator: React.FC<ICharacterCalculatorProps> = ({ 
  currentCharacter, 
  unitsList,
  currentLevel,
  targetLevel,
  isLoading,
  handleUnitChange,
  handleCurrentLevelChange, 
  handleTargetLevelChange }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item sm={6} xs={6}>
        {isLoading ? 
          <div className={classes.spinner}>
            <CircularProgress color={'secondary'} />
          </div> 
          : 
          <UnitsSelect 
            handleChange={handleUnitChange}
            selectLabel={'Character'}
            selectOptions={unitsList}
            selectValue={currentCharacter}
          />}
      </Grid>
      <Grid item sm={3} xs={3}>
        <CalculatorSelect 
          handleChange={handleCurrentLevelChange}
          selectLabel={'Current Level'}
          selectOptions={levelingCosts}
          selectValue={currentLevel}
        />
      </Grid>
      <Grid item sm={3} xs={3}>
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
