import axios from 'axios';
import { COMMIT_BASE_URL } from '../redux/constants/index';

export const getRequest = async endpoint => axios.get(`${COMMIT_BASE_URL}${endpoint}`);

export const setHeader = password => {
    axios.defaults.headers.common = {
        auth: {
        username: 'Psiale',
        password,
      } };
  };
  