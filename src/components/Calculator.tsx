import { Box, FormControl, MenuItem, Select, Typography, makeStyles } from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react';
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

  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
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
      <FormControl variant="filled" className={classes.formControl} size={'small'}>
        <Select
          className={classes.levelSelect}
          id="starting-level-select"
          defaultValue={1}
          value={level}
          onChange={handleChange}
        >
          {Object.keys(levelingCosts).map((level: string) => {
            return <MenuItem key={level} value={level}>{level}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Calculator;