import {
  Box,
  makeStyles, 
  MenuItem, TextField } from '@material-ui/core';
import React, { ChangeEvent } from 'react';

import { convertLabelToId } from '../../utilities/Utilities';

const useStyles = makeStyles(theme => ({
  form: {
    margin: theme.spacing(1, 0)
  },
  label: {
    fontSize: 18
  }
}));

interface ICalculatorSelectProps {
    handleChange(level: number): void,
    selectLabel: string,
    selectOptions: Record<number, number>,
    selectValue: number
}

const CalculatorSelect: React.FC<ICalculatorSelectProps> = ({
  handleChange, selectLabel, selectOptions, selectValue 
}) => {
  const classes = useStyles();

  return (
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
  );
};

export default CalculatorSelect;