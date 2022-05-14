import { MenuItem, TextField } from '@material-ui/core';
import React, { ChangeEvent, useCallback } from 'react';

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
  const handleOnChange = useCallback((event: ChangeEvent<{ value: unknown }>) => {
    const newLevel = event.target.value as number;

    handleChange(newLevel);
  }, [handleChange]);

  return (
    <TextField
      defaultValue={1}
      fullWidth
      id={convertLabelToId(selectLabel)}
      onChange={handleOnChange}
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