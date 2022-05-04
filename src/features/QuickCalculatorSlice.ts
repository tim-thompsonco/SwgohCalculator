import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface QuickCalculatorState {
  currentLevel: number,
  desiredLevel: number
}

const initialState: QuickCalculatorState = {
  currentLevel: 1,
  desiredLevel: 85
};

export const quickCalculatorSlice = createSlice({
  name: 'quickCalculator',
  initialState,
  reducers: {
    changeCurrentLevel: (state, action: PayloadAction<number>) => {
      state.currentLevel = action.payload;
    },
    changeDesiredLevel: (state, action: PayloadAction<number>) => {
      state.desiredLevel = action.payload;
    }
  }
});

export const { changeCurrentLevel, changeDesiredLevel } = quickCalculatorSlice.actions;

export default quickCalculatorSlice.reducer;