import { FormControl, Grid, NativeSelect, Typography, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { levelingCosts } from '../constants/LevelingCost';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  formControl: {
    backgroundColor: theme.palette.secondary.main,
    margin: theme.spacing(1),
    minWidth: 50,
  },
  levelLabel: {
    color: theme.palette.primary.main,
    fontSize: 18,
  },
  levelLabelContainer: {
    justifyItems: 'center'
  },
  levelSelect: {
    marginTop: theme.spacing(1),
    height: theme.spacing(4),
    width: theme.spacing(12)
  }
}));

interface CalculatorProps {
    label: string
}

const Calculator: React.FC<CalculatorProps> = ({ label }) => {
  const classes = useStyles();
  const [level, setLevel] = useState(1);

  const handleChange = (event: any) => {
    const newLevel = Number(event.target.value);

    setLevel(newLevel);
  };

  return (
    
    <Grid container className={classes.container}>
      <Grid item xs={2} className={classes.levelLabelContainer}>
        <Typography className={classes.levelLabel} align={'center'}>
          {label}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <FormControl className={classes.formControl}>
          <NativeSelect
            inputProps={{
              name: 'starting-level',
              id: 'starting-level-select',
            }}
            onChange={handleChange}
            value={level}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </NativeSelect>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default Calculator;