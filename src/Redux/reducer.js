import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { changeFilter } from './action';
import { fetch, post, deleteThunk } from './thunk';

// function initialState() {
//   const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
//   if (parsedContacts) {
//     return parsedContacts;
//   }
//   return [];
// }

const items = createReducer([], {
  [fetch.fulfilled]: (_, { payload }) => payload,
  [post.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteThunk.fulfilled]: (state, { payload }) =>
    state.filter(item => item.id !== payload.id),
});
const error = createReducer(null, {
  [fetch.rejected]: (_, { payload }) => payload,
  [post.rejected]: (_, { payload }) => payload,
  [deleteThunk.rejected]: (_, { payload }) => payload,
  [fetch.pending]: () => null,
  [post.pending]: () => null,
  [deleteThunk.pending]: () => null,
});
const isLoading = createReducer(false, {
  [fetch.pending]: () => true,
  [fetch.fulfilled]: () => false,
  [fetch.rejected]: () => false,
  [post.pending]: () => true,
  [post.fulfilled]: () => false,
  [post.rejected]: () => false,
  [deleteThunk.pending]: () => true,
  [deleteThunk.fulfilled]: () => false,
  [deleteThunk.rejected]: () => false,
});
const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});
export const rootReducer = combineReducers({
  items,
  isLoading,
  error,
  filter,
});
