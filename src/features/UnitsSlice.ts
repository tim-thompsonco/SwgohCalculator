import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UnitsState {
  unitsList: Record<string, string>
}

const initialState: UnitsState = {
  unitsList: {}
};

export const unitsSlice = createSlice({
  name: 'units',
  initialState,
  reducers: {
    hydrateUnitsList: (state, action: PayloadAction<Record<string, string>>) => {
      state.unitsList = action.payload;
    }
  }
});

export const { 
  hydrateUnitsList
} = unitsSlice.actions;

export default unitsSlice.reducer;