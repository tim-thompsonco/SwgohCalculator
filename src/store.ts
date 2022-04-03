import { applyMiddleware, combineReducers, compose, createStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import quickCalculatorReducer from './features/QuickCalculatorSlice';

const middlewares = [];
const rootReducer = combineReducers({
  quickCalculator: quickCalculatorReducer
});

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer);

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch