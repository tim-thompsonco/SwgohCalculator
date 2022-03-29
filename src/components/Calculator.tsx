import React, { useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { levelingCosts } from '../constants/LevelingCost';

interface CalculatorProps {
    label: string
}

const Calculator: React.FC<CalculatorProps> = ({ label }) => {
  const [level, setLevel] = useState(1);

  const handleChange = (event: SelectChangeEvent) => {
    const newLevel = Number(event.target.value);

    setLevel(newLevel);
  };

  return (
    <Box sx={{ 
      marginX: 2, 
      marginY: 2
    }}>
      <FormControl fullWidth>
        <InputLabel sx={{ 
          color: 'primary.main',
          fontSize: 16,
          fontWeight: 'bold',
        }}>
          {label}
        </InputLabel>
        <Select
          value={level.toString()}
          onChange={handleChange}
          //variant={'outlined'}
          sx={{ 
            bgcolor: 'background.paper',
            //color: 'secondary',
            width: 100,
            height: 50,
            marginX: 2,
            marginY: 2
          }}
        >
          {Object.keys(levelingCosts).map((level) => {
            <MenuItem value={level}>{level}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Calculator;