import { Grid, Typography } from '@material-ui/core';
import React from 'react';

interface ICalculatorTotalProps {
    totalCostFormattedValue: string,
    totalCostLabel: string
}

const CalculatorTotal: React.FC<ICalculatorTotalProps> = ({ totalCostLabel, totalCostFormattedValue }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={9}>
        <Typography variant={'h5'}>
          {totalCostLabel}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant={'h5'}>
          {totalCostFormattedValue}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CalculatorTotal;