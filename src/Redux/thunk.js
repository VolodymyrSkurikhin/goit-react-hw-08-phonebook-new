import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, postContact } from '../service';

export const fetch = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await fetchContacts();
      return contacts;
    } catch (_) {
      return rejectWithValue('Sorry, try later...');
    }
  }
);
export const post = createAsyncThunk(
  'contact/postContact',
  async (contact, { rejectWithValue }) => {
    try {
      return await postContact(contact);
    } catch (_) {
      return rejectWithValue('Sorry, try later...');
    }
  }
);
export const deleteThunk = createAsyncThunk(
  'contact/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      return await deleteContact(id);
    } catch (_) {
      return rejectWithValue('Sorry, try later...');
    }
  }
);
