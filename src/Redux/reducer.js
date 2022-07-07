import {
  createReducer,
  combineReducers,
} from '@reduxjs/toolkit/dist/createReducer';
import { addContact, deleteContact, changeFilter } from './store';

const items = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
});
const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});
export const rootReducer = combineReducers({
  items,
  filter,
});
