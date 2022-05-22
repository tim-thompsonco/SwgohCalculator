import { applyMiddleware, combineReducers, compose, createStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import playerRosterReducer from './features/PlayerRosterSlice';
import quickCalculatorReducer from './features/QuickCalculatorSlice';
import unitsReducer from './features/UnitsSlice';

const middlewares = [];
const rootReducer = combineReducers({
  playerRoster: playerRosterReducer,
  quickCalculator: quickCalculatorReducer,
  units: unitsReducer
});

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer);

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch