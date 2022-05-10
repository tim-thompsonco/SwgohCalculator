import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { calculateLevelingCost } from '../services/Calculator';

export interface QuickCalculatorState {
  currentCharacter: string,
  currentLevel: number,
  targetLevel: number,
  upgradeCost: number
}

const initialState: QuickCalculatorState = {
  currentCharacter: '',
  currentLevel: 1,
  targetLevel: 85,
  upgradeCost: calculateLevelingCost(1, 85)
};

export const quickCalculatorSlice = createSlice({
  name: 'quickCalculator',
  initialState,
  reducers: {
    changeCurrentCharacter: (state, action: PayloadAction<string>) => {
      state.currentCharacter = action.payload;
    },
    changeCurrentLevel: (state, action: PayloadAction<number>) => {
      state.currentLevel = action.payload;
      state.upgradeCost = calculateLevelingCost(state.currentLevel, state.targetLevel);
    },
    changeTargetLevel: (state, action: PayloadAction<number>) => {
      state.targetLevel = action.payload;
      state.upgradeCost = calculateLevelingCost(state.currentLevel, state.targetLevel);
    }
  }
});

export const { 
  changeCurrentCharacter,
  changeCurrentLevel, 
  changeTargetLevel
} = quickCalculatorSlice.actions;

export default quickCalculatorSlice.reducer;