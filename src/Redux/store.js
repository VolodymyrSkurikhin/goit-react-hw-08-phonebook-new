import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './action';

export const store = configureStore({
  reducer: {
    contacts: rootReducer,
  },
});
