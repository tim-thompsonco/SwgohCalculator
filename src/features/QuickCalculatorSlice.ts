import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface QuickCalculatorState {
  currentLevel: number,
  targetLevel: number
}

const initialState: QuickCalculatorState = {
  currentLevel: 1,
  targetLevel: 85
};

export const quickCalculatorSlice = createSlice({
  name: 'quickCalculator',
  initialState,
  reducers: {
    changeCurrentLevel: (state, action: PayloadAction<number>) => {
      state.currentLevel = action.payload;
    },
    changeTargetLevel: (state, action: PayloadAction<number>) => {
      state.targetLevel = action.payload;
    }
  }
});

export const { changeCurrentLevel, changeTargetLevel } = quickCalculatorSlice.actions;

export default quickCalculatorSlice.reducer;