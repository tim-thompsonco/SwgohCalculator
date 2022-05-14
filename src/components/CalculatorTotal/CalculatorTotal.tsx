import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 0.3, 0)
  },
  totalCost: {
    fontSize: 18,
  }
}));

interface ICalculatorTotalProps {
    totalCostFormattedValue: string,
    totalCostLabel: string
}

const CalculatorTotal: React.FC<ICalculatorTotalProps> = ({ totalCostLabel, totalCostFormattedValue }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.container} container spacing={3}>
      <Grid item xs={8}>
        <Typography className={classes.totalCost}>
          {totalCostLabel}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Box display={'flex'} justifyContent={'flex-end'}>
          <Typography className={classes.totalCost}>
            {totalCostFormattedValue}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CalculatorTotal;