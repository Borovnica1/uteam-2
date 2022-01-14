import axios from 'axios';

import { API_ENDPOINT } from 'config/config.js';

const axiosInstance = axios.create({
  baseURL: API_ENDPOINT,
  timeout: 5000,
});

axiosInstance.interceptors.request.use(function (req) {
  console.log(`${req.method} ${req.url}`);
  const jwt = localStorage.getItem('userJwt');
  console.log('WTF add jwt:::???', jwt);
  if (jwt) {
    console.log('dodaj jwt????????');
    req.headers.Authorization = 'Bearer ' + jwt;
  }
  return req;
});

export default axiosInstance;
