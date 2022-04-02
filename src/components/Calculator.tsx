import { FormControl, Grid, MenuItem, Select, Typography, makeStyles } from '@material-ui/core';
import React, { ChangeEvent, Fragment, useState } from 'react';
import { calculateLevelingCost } from '../services/Calculator';
import { levelingCosts } from '../constants/LevelingCost';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center'
  },
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
  },
  rightAlignItem: {
    justifyItems: 'flex-end'
  }
}));

const Calculator: React.FC = () => {
  const classes = useStyles();
  const [startingLevel, setStartingLevel] = useState(1);
  const [desiredLevel, setDesiredLevel] = useState(1);

  const handleStartingLevelChange = (event: ChangeEvent<{ value: unknown }>) => {
    const newLevel = Number(event.target.value);

    setStartingLevel(newLevel);
  };

  const handleDesiredLevelChange = (event: ChangeEvent<{ value: unknown }>) => {
    const newLevel = Number(event.target.value);

    setDesiredLevel(newLevel);
  };

  return (
    <Fragment>
      <Grid container className={classes.container}>
        <Grid item xs={2}>
          <Typography className={classes.levelLabel}>
            {'Starting Level'}
          </Typography>
        </Grid>
        <Grid item xs={1} className={classes.rightAlignItem}>
          <FormControl variant="filled" className={classes.formControl} size={'small'}>
            <Select
              className={classes.levelSelect}
              id="starting-level-select"
              defaultValue={1}
              value={startingLevel}
              onChange={handleStartingLevelChange}
            >
              {Object.keys(levelingCosts).map((level: string) => {
                return <MenuItem key={level} value={level}>{level}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container className={classes.container}>
        <Grid item xs={2}>
          <Typography className={classes.levelLabel}>
            {'Desired Level'}
          </Typography>
        </Grid>
        <Grid item xs={1} className={classes.rightAlignItem}>
          <FormControl variant="filled" className={classes.formControl} size={'small'}>
            <Select
              className={classes.levelSelect}
              id="desired-level-select"
              defaultValue={1}
              value={desiredLevel}
              onChange={handleDesiredLevelChange}
            >
              {Object.keys(levelingCosts).map((level: string) => {
                return <MenuItem key={level} value={level}>{level}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container className={classes.container}>
        <Grid item xs={2}>
          <Typography className={classes.levelLabel}>
            {'Total Cost'}
          </Typography>
        </Grid>
        <Grid item xs={1} className={classes.rightAlignItem}>
          <Typography className={classes.levelLabel}>
            {calculateLevelingCost(startingLevel, desiredLevel)}
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Calculator;