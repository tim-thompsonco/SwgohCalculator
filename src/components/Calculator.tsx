import { Box, FormControl, MenuItem, Select, Typography, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { levelingCosts } from '../constants/LevelingCost';

const useStyles = makeStyles(theme => ({
  formControl: {
    backgroundColor: theme.palette.secondary.main,
    margin: theme.spacing(1)
  },
  levelLabel: {
    color: theme.palette.primary.main,
    fontSize: 18,
  },
  levelSelect: {
    background: theme.palette.secondary.main,
    paddingBottom: theme.spacing(2),
    height: theme.spacing(3),
    width: theme.spacing(8)
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
    
    <Box
      display="flex"
      alignItems="center"
    >
      <Typography className={classes.levelLabel}>
        {label}
      </Typography>
      <FormControl variant="filled" className={classes.formControl}>
        <Select
          className={classes.levelSelect}
          id="starting-level-select"
          value={level}
          onChange={handleChange}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Calculator;