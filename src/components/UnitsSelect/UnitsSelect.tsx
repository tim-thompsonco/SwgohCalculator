import { MenuItem, TextField } from '@material-ui/core';
import React, { ChangeEvent } from 'react';

import { convertLabelToId } from '../../utilities/Utilities';
  
interface IUnitsSelectProps {
    handleChange(unit: string):  void,
    selectLabel: string,
    selectOptions: Record<string, string>,
    selectValue: string
}
  
const UnitsSelect: React.FC<IUnitsSelectProps> = ({
  handleChange, 
  selectLabel, 
  selectOptions, 
  selectValue 
}) => {
    
  return (
    <TextField
      fullWidth
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
  );
};
  
export default UnitsSelect;