// src/api.js
import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:8000', // Change this to your backend URL
    withCredentials: true,
});

export const loginWithEmail = (email, password) => API.post('/auth/login', { email, password });
export const loginWithGoogle = () => API.get('/auth/google');
export const loginWithFacebook = () => API.get('/auth/facebook');
