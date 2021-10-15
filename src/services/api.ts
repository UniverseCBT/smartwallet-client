import axios from 'axios';

export const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3333'
      : process.env.REACT_APP_SERVER_PATH_PROD,
  headers: {
    Accept: 'application/json;charset=UTF-8',
    'Content-Type': 'application/json'
  }
});
