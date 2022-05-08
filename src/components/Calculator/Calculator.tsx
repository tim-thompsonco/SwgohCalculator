import { Box, Card, CardContent, CardHeader, makeStyles, Typography } from '@material-ui/core';
import axios from 'axios';
import numeral from 'numeral';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { levelingCosts } from '../../constants/LevelingCost';
import { changeCurrentLevel, changeTargetLevel, hydrateUnitsList } from '../../features/QuickCalculatorSlice';
import { calculateLevelingCost } from '../../services/Calculator';
import { logGoogleAnalyticsEvent, logGoogleAnalyticsPageView } from '../../services/GoogleAnalyticsTracker';
import { RootState } from '../../store';
import { CalculatorSelect, CalculatorTotal } from '../index';

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
  const currentLevel = useSelector((state: RootState) => state.quickCalculator.currentLevel);
  const targetLevel = useSelector((state: RootState) => state.quickCalculator.targetLevel);
  const unitsList = useSelector((state: RootState) => state.quickCalculator.unitsList);
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

  return (
    <Box display={'inline-block'}>
      <Card className={classes.calculatorCard}>
        <CardHeader
          className={classes.calculatorCardHeader}
          id={'quickCalculator'}
          title={'Quick Calculator'}
        />
        <CardContent>
          <CalculatorSelect 
            handleUpgrade={handleCurrentLevelChange}
            upgradeCosts={levelingCosts}
            upgradeLabel={'Current Level'}
            upgradeValue={currentLevel}
          />
          <CalculatorSelect 
            handleUpgrade={handleTargetLevelChange}
            upgradeCosts={levelingCosts}
            upgradeLabel={'Target Level'}
            upgradeValue={targetLevel}
          />
          <CalculatorTotal 
            totalCostFormattedValue={numeral(calculateLevelingCost(currentLevel, targetLevel)).format('0,0')}
            totalCostLabel={'Total Cost'}
          />
          {errorMessage.length ? <Typography>{errorMessage}</Typography> : null}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Calculator;