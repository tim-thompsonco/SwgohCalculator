import { MenuItem, TextField } from '@material-ui/core';
import React, { ChangeEvent } from 'react';

import { convertLabelToId } from '../../utilities/Utilities';

interface ICalculatorSelectProps {
    handleChange(level: number): void,
    selectLabel: string,
    selectOptions: Record<number, number>,
    selectValue: number
}

const CalculatorSelect: React.FC<ICalculatorSelectProps> = ({
  handleChange, selectLabel, selectOptions, selectValue 
}) => {
  return (
    <TextField
      defaultValue={1}
      fullWidth
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
  );
};

export default CalculatorSelect;