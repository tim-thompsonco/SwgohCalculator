import { Box, Card, CardContent, CardHeader, makeStyles, Typography } from '@material-ui/core';
import axios from 'axios';
import numeral from 'numeral';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { levelingCosts } from '../../constants/LevelingCost';
import { changeCurrentCharacter, changeCurrentLevel, changeTargetLevel } from '../../features/QuickCalculatorSlice';
import { hydrateUnitsList } from '../../features/UnitsSlice';
import { logGoogleAnalyticsEvent, logGoogleAnalyticsPageView } from '../../services/GoogleAnalyticsTracker';
import { RootState } from '../../store';
import { CalculatorSelect, CalculatorTotal } from '../index';
import UnitsSelect from '../UnitsSelect/UnitsSelect';

const useStyles = makeStyles(theme => ({
  calculatorCard: {
    display: 'inline-block',
    margin: theme.spacing(2)
  },
  calculatorCardHeader: {
    textAlign: 'center'
  }
}));

const Calculator: React.FC = () => {
  const classes = useStyles();
  const currentCharacter = useSelector((state: RootState) => state.quickCalculator.currentCharacter);
  const currentLevel = useSelector((state: RootState) => state.quickCalculator.currentLevel);
  const targetLevel = useSelector((state: RootState) => state.quickCalculator.targetLevel);
  const upgradeCost = useSelector((state: RootState) => state.quickCalculator.upgradeCost);
  const unitsList = useSelector((state: RootState) => state.units.unitsList);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    logGoogleAnalyticsPageView(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    if (!unitsList) {
      loadUnitsList();
    }
  }, [unitsList]);

  const loadUnitsList = async () => {
    const response = await axios.get('https://swgohcalculatorapi-qa.herokuapp.com/units');
    const unitsList: Record<string, string> = response.data;
  
    dispatch(hydrateUnitsList(unitsList));
  };

  const handleCurrentLevelChange = (level: number) => {
    if (level > targetLevel) {
      setErrorMessage('Current level cannot be greater than target level');
      return;
    }

    dispatch(changeCurrentLevel(level));
    setErrorMessage('');
    logGoogleAnalyticsEvent('Quick Calculator', `Current Level Changed to ${level}`, 'User Interaction');
  };

  const handleTargetLevelChange = (level: number) => {
    if (level < currentLevel) {
      setErrorMessage('Target level cannot be less than current level');
      return;
    }

    dispatch(changeTargetLevel(level));
    setErrorMessage('');
    logGoogleAnalyticsEvent('Quick Calculator', `Target Level Changed to ${level}`, 'User Interaction');
  };

  const handleUnitChange = (unit: string) => {
    dispatch(changeCurrentCharacter(unit));
    setErrorMessage('');
    logGoogleAnalyticsEvent('Quick Calculator', `Unit Changed to ${unit}`, 'User Interaction');
  };

  return (
    <Box display={'inline-block'}>
      <Card className={classes.calculatorCard}>
        <CardHeader
          className={classes.calculatorCardHeader}
          id={'quickCalculator'}
          title={'Quick Calculator'}
        />
        <CardContent>
          <UnitsSelect 
            handleChange={handleUnitChange}
            selectLabel={'Character'}
            selectOptions={unitsList ?? {}}
            selectValue={currentCharacter}
          />
          <CalculatorSelect 
            handleChange={handleCurrentLevelChange}
            selectLabel={'Current Level'}
            selectOptions={levelingCosts}
            selectValue={currentLevel}
          />
          <CalculatorSelect 
            handleChange={handleTargetLevelChange}
            selectLabel={'Target Level'}
            selectOptions={levelingCosts}
            selectValue={targetLevel}
          />
          <CalculatorTotal 
            totalCostFormattedValue={numeral(upgradeCost).format('0,0')}
            totalCostLabel={'Total Cost'}
          />
          {errorMessage.length ? <Typography>{errorMessage}</Typography> : null}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Calculator;