import { configureStore } from '@reduxjs/toolkit';

import quickCalculatorReducer from './features/QuickCalculatorSlice';

export const store = configureStore({
  reducer: {
    quickCalculator: quickCalculatorReducer
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch