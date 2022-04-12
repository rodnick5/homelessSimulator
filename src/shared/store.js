import rootReducer from './../reducers';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

export const store = configureStore({
 reducer: rootReducer ,
 middleware,
 devTools: process.env.NODE_ENV !== 'production',
});