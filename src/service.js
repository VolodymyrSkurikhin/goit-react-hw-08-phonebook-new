import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export async function fetchContacts() {
  const response = await axios.get('/contacts');
  return response.data;
}
export async function deleteContact(id) {
  const response = await axios.delete(`/contacts/${id}`);
  console.log(response.data);
  return id;
}
export async function postContact(item) {
  const response = await axios.post(`/contacts`, item);
  return response.data;
}
export async function postRegister(item) {
  const response = await axios.post(`/users/signup`, item);
  axios.defaults.headers.common['Authorization'] = response.data.token;
  return response.data;
}
export async function postLogin(item) {
  const response = await axios.post(`/users/login`, item);
  axios.defaults.headers.common['Authorization'] = response.data.token;
  return response.data;
}
export async function postLogout() {
  await axios.post(`/users/logout`);
  axios.defaults.headers.common['Authorization'] = '';
}
export async function getCurrentUser(token) {
  axios.defaults.headers.common['Authorization'] = `${token}`;
  const response = await axios.get(`/users/current`);
  return response.data;
}
