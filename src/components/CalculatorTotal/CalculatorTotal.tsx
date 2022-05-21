import { Grid, Typography } from '@material-ui/core';
import React from 'react';

interface ICalculatorTotalProps {
    totalCostFormattedValue: string,
    totalCostLabel: string
}

const CalculatorTotal: React.FC<ICalculatorTotalProps> = ({ totalCostLabel, totalCostFormattedValue }) => {
  return (
    <Grid container spacing={3}>
      <Grid item sm={9} xs={8}>
        <Typography variant={'h5'}>
          {totalCostLabel}
        </Typography>
      </Grid>
      <Grid item sm={3} xs={4}>
        <Typography align={'right'} variant={'h5'}>
          {totalCostFormattedValue}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CalculatorTotal;