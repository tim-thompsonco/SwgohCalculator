import { FormControl, Grid, MenuItem, Select, Typography, makeStyles } from '@material-ui/core';
import React, { ChangeEvent, Fragment, useState } from 'react';
import { calculateLevelingCost } from '../services/Calculator';
import { levelingCosts } from '../constants/LevelingCost';
import numeral from 'numeral';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  formControl: {
    backgroundColor: theme.palette.secondary.main,
    margin: theme.spacing(1, 0)
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
      <Grid className={classes.container} container>
        <Grid item xs={2}>
          <Typography className={classes.levelLabel}>
            {'Starting Level'}
          </Typography>
        </Grid>
        <Grid className={classes.rightAlignItem} item xs={1}>
          <FormControl className={classes.formControl} variant="filled">
            <Select
              className={classes.levelSelect}
              defaultValue={1}
              id="starting-level-select"
              onChange={handleStartingLevelChange}
              value={startingLevel}
            >
              {Object.keys(levelingCosts).map((level: string) => {
                return <MenuItem key={level} value={level}>{level}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid className={classes.container} container>
        <Grid item xs={2}>
          <Typography className={classes.levelLabel}>
            {'Desired Level'}
          </Typography>
        </Grid>
        <Grid className={classes.rightAlignItem} item xs={1}>
          <FormControl className={classes.formControl} variant="filled">
            <Select
              className={classes.levelSelect}
              defaultValue={1}
              id="desired-level-select"
              onChange={handleDesiredLevelChange}
              value={desiredLevel}
            >
              {Object.keys(levelingCosts).map((level: string) => {
                return <MenuItem key={level} value={level}>{level}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid className={classes.container} container>
        <Grid item xs={2}>
          <Typography className={classes.levelLabel}>
            {'Total Cost'}
          </Typography>
        </Grid>
        <Grid className={classes.rightAlignItem} item xs={1}>
          <Typography className={classes.levelLabel}>
            {numeral(calculateLevelingCost(startingLevel, desiredLevel)).format('0,0')}
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Calculator;