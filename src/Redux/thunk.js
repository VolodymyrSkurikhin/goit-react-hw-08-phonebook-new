import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContacts,
  deleteContact,
  postContact,
  postRegister,
  postLogin,
  postLogout,
  getCurrentUser,
} from '../service';

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
export const register = createAsyncThunk(
  'auth/register',
  async (creds, { rejectWithValue }) => {
    try {
      return await postRegister(creds);
    } catch (_) {
      return rejectWithValue('Sorry, try later...');
    }
  }
);
export const login = createAsyncThunk(
  'auth/login',
  async (creds, { rejectWithValue }) => {
    try {
      return await postLogin(creds);
    } catch (_) {
      return rejectWithValue('Sorry, try later...');
    }
  }
);
export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      return await postLogout();
    } catch (_) {
      return rejectWithValue('Sorry, try later...');
    }
  }
);
export const getCurrentUserThunk = createAsyncThunk(
  'auth/getUser',
  async (_, { getState, rejectWithValue }) => {
    const token = getState().auth.token;
    if (!token) {
      return rejectWithValue('No user logged in...');
      // return (token = '');
    }
    try {
      return await getCurrentUser(token);
    } catch (_) {
      return rejectWithValue('Sorry, try later...');
    }
  }
);
