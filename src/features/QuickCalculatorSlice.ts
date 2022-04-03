import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface QuickCalculatorState {
  startingLevel: number,
  desiredLevel: number
}

const initialState: QuickCalculatorState = {
  startingLevel: 1,
  desiredLevel: 85
};

export const quickCalculatorSlice = createSlice({
  name: 'quickCalculator',
  initialState,
  reducers: {
    changeStartingLevel: (state, action: PayloadAction<number>) => {
      state.startingLevel = action.payload;
    },
    changeDesiredLevel: (state, action: PayloadAction<number>) => {
      state.desiredLevel = action.payload;
    }
  }
});

export const { changeStartingLevel, changeDesiredLevel } = quickCalculatorSlice.actions;

export default quickCalculatorSlice.reducer;