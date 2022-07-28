import { createSelector } from 'reselect';

const getContacts = state => state.contacts;
const getError = state => state.error;
const getAuth = state => state.auth;
export const getContactItems = createSelector(
  getContacts,
  contacts => contacts.items
);
export const getFilter = createSelector(
  getContacts,
  contacts => contacts.filter
);
export const errorSelector = createSelector(getError, error => error);
export const isLoggedInSelector = createSelector(
  getAuth,
  auth => auth.isLoggedIn
);
export const isReloadingSelector = createSelector(
  getAuth,
  auth => auth.isReloading
);
export const emailSelector = createSelector(getAuth, auth => auth.user.email);
