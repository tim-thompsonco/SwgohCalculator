import {
  Box,
  Grid, makeStyles, 
  MenuItem, TextField, Typography } from '@material-ui/core';
import React, { ChangeEvent } from 'react';

import { convertLabelToId } from '../../utilities/Utilities';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  form: {
    margin: theme.spacing(1, 0)
  },
  label: {
    fontSize: 18
  }
}));

interface ICalculatorSelectProps {
    handleChange(level: number):  void,
    selectLabel: string,
    selectOptions: Record<number, number>,
    selectValue: number
}

const CalculatorSelect: React.FC<ICalculatorSelectProps> = ({
  handleChange, selectLabel, selectOptions, selectValue 
}) => {
  const classes = useStyles();

  return (
    <Grid className={classes.container} container spacing={2}>
      <Grid item xs={8}>
        <Typography className={classes.label}>
          {selectLabel}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Box
          className={classes.form} 
          component={'form'}
          justifyContent={'flex-end'}
        >
          <TextField
            defaultValue={1}
            id={convertLabelToId(selectLabel)}
            onChange={(event: ChangeEvent<{ value: unknown }>) => {
              const newLevel = event.target.value as number;

              handleChange(newLevel);
            }}
            select
            value={selectValue}
            variant={'outlined'}
          >
            {Object.keys(selectOptions).map((option: string) => {
              return <MenuItem id={option} key={option} value={option}>{option}</MenuItem>;
            })}
          </TextField>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CalculatorSelect;