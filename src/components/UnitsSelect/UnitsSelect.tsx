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
  
  interface IUnitsSelectProps {
      handleChange(unit: string):  void,
      selectLabel: string,
      selectOptions: Record<string, string>,
      selectValue: string
  }
  
const UnitsSelect: React.FC<IUnitsSelectProps> = ({
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
            id={convertLabelToId(selectLabel)}
            onChange={(event: ChangeEvent<{ value: unknown }>) => {
              const newUnit = event.target.value as string;
  
              handleChange(newUnit);
            }}
            select
            value={selectValue ?? ''}
            variant={'outlined'}
          >
            {Object.keys(selectOptions).map((option: string) => {
              return <MenuItem id={option} key={option} value={option}>{selectOptions[option]}</MenuItem>;
            })}
          </TextField>
        </Box>
      </Grid>
    </Grid>
  );
};
  
export default UnitsSelect;