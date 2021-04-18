import axios from 'axios';
import BASE_URL from '../redux/constants/index';

export const getRequest = async endpoint => axios.get(`${BASE_URL}${endpoint}`);

export const setHeader = password => {
    axios.defaults.headers.common = { auth: {
        username: 'Psiale',
        password,
      } };
  };
  