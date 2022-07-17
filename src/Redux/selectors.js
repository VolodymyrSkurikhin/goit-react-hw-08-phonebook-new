import { createSelector } from 'reselect';

const getContacts = state => state.contacts;
export const getContactItems = createSelector(
  getContacts,
  contacts => contacts.items
);
export const getFilter = createSelector(
  getContacts,
  contacts => contacts.filter
);
