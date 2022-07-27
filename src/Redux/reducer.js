import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { changeFilter } from './action';
import {
  fetch,
  post,
  deleteThunk,
  register,
  login,
  logout,
  getCurrentUserThunk,
} from './thunk';

// function initialState() {
//   const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
//   if (parsedContacts) {
//     return parsedContacts;
//   }
//   return [];
// }

const user = createReducer(
  { name: '', email: '' },
  {
    [register.fulfilled]: (_, { payload }) => payload.user,
    [login.fulfilled]: (_, { payload }) => payload.user,
    [logout.fulfilled]: () => null,
    [getCurrentUserThunk.fulfilled]: (_, { payload }) => payload.user,
  }
);
const token = createReducer(null, {
  [register.fulfilled]: (_, { payload }) => payload.token,
  [login.fulfilled]: (_, { payload }) => payload.token,
  [logout.fulfilled]: () => null,
});
const isLoggedIn = createReducer(false, {
  [register.fulfilled]: () => true,
  [login.fulfilled]: () => true,
  [logout.fulfilled]: () => false,
  [getCurrentUserThunk.fulfilled]: () => true,
});

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

export const authReducer = combineReducers({
  user,
  token,
  isLoggedIn,
});
export const contactsReducer = combineReducers({
  items,
  isLoading,
  error,
  filter,
});
