import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  totalCost: {
    color: theme.palette.primary.main,
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
    <Grid className={classes.container} container spacing={7}>
      <Grid item>
        <Typography className={classes.totalCost}>
          {totalCostLabel}
        </Typography>
      </Grid>
      <Grid item>
        <Box display="flex" justifyContent="flex-end">
          <Typography className={classes.totalCost}>
            {totalCostFormattedValue}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CalculatorTotal;