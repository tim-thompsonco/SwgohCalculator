import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface QuickCalculatorState {
  currentLevel: number,
  targetLevel: number,
  unitsList: Record<string, string> | null
}

const initialState: QuickCalculatorState = {
  currentLevel: 1,
  targetLevel: 85,
  unitsList: null
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
    },
    hydrateUnitsList: (state, action: PayloadAction<Record<string, string>>) => {
      state.unitsList = action.payload;
    }
  }
});

export const { 
  changeCurrentLevel, 
  changeTargetLevel,
  hydrateUnitsList
} = quickCalculatorSlice.actions;

export default quickCalculatorSlice.reducer;