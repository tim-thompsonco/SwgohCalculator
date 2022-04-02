import { Grid, Typography, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  totalCost: {
    color: theme.palette.primary.main,
    fontSize: 18,
  },
  rightAlignItem: {
    justifyItems: 'flex-end' 
  }
}));

interface ICalculatorTotalProps {
    totalCostFormattedValue: string,
    totalCostLabel: string
}

const CalculatorTotal: React.FC<ICalculatorTotalProps> = ({ totalCostLabel, totalCostFormattedValue }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.container} container>
      <Grid item sm={2} xs={4}>
        <Typography className={classes.totalCost}>
          {totalCostLabel}
        </Typography>
      </Grid>
      <Grid className={classes.rightAlignItem} item sm={1} xs={2}>
        <Typography className={classes.totalCost}>
          {totalCostFormattedValue}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CalculatorTotal;