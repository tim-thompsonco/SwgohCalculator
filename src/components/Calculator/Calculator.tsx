import { Box, Card, CardContent, CardHeader, makeStyles, Typography } from '@material-ui/core';
import numeral from 'numeral';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { levelingCosts } from '../../constants/LevelingCost';
import { changeCurrentLevel, changeDesiredLevel } from '../../features/QuickCalculatorSlice';
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
  const desiredLevel = useSelector((state: RootState) => state.quickCalculator.desiredLevel);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    logGoogleAnalyticsPageView(window.location.pathname + window.location.search);
  }, []);

  const handleCurrentLevelChange = (level: number) => {
    if (level > desiredLevel) {
      setErrorMessage('Current level cannot be greater than desired level');
      return;
    }

    dispatch(changeCurrentLevel(level));
    setErrorMessage('');
    logGoogleAnalyticsEvent('Quick Calculator', `Current Level Changed to ${level}`, 'User Interaction');
  };

  const handleDesiredLevelChange = (level: number) => {
    if (level < currentLevel) {
      setErrorMessage('Desired level cannot be less than current level');
      return;
    }

    dispatch(changeDesiredLevel(level));
    setErrorMessage('');
    logGoogleAnalyticsEvent('Quick Calculator', `Desired Level Changed to ${level}`, 'User Interaction');
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
            handleUpgrade={handleDesiredLevelChange}
            upgradeCosts={levelingCosts}
            upgradeLabel={'Desired Level'}
            upgradeValue={desiredLevel}
          />
          <CalculatorTotal 
            totalCostFormattedValue={numeral(calculateLevelingCost(currentLevel, desiredLevel)).format('0,0')}
            totalCostLabel={'Total Cost'}
          />
          {errorMessage.length ? <Typography>{errorMessage}</Typography> : null}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Calculator;