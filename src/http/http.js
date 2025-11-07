import axios from 'axios';



const http = axios.create({
  baseURL: process.env.REACT_APP_SERVER_IP,
});

http.interceptors.request.use(async (config) => {
  const token =  sessionStorage.getItem('token');
  if (token && token !== 'null' && token !== 'undefined') {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    delete config.headers.Authorization;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});


export default http;
