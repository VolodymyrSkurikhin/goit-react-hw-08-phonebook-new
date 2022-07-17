import axios from 'axios';
axios.defaults.baseURL = 'https://62d2b10981cb1ecafa6422bd.mockapi.io';

export async function fetchContacts() {
  const response = await axios.get('/contacts');
  return response.data;
}
export async function deleteContact(id) {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
}
export async function postContact(item) {
  const response = await axios.post(`/contacts`, item);
  return response.data;
}
