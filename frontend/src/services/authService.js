import axios from 'axios';

const API = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export function register(data) {
  return axios.post(`${API}/api/auth/register`, data);
}

export function login(data) {
  return axios.post(`${API}/api/auth/login`, data);
}

export function me(token) {
  return axios.get(`${API}/api/auth/me`, { headers: { Authorization: `Bearer ${token}` } });
}
