import axios from 'axios';
import { BAD_REQUEST, UNAUTHORIZED, UNPROCESSABLE_ENTITY } from 'http-status-codes';

import { ApiError, BadRequest, Unauthorized, UnprocessableEntity } from '@/errors';

axios.defaults.baseURL = 'http://192.168.56.101:5000';

// axios.interceptors.request.use(
//   (config) => {
//     const token = store.getters.token;
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   Promise.reject,
// );

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    switch (error.response.code) {
      case BAD_REQUEST:
        error = new BadRequest();
        break;
      case UNAUTHORIZED:
        error = new Unauthorized();
        break;
      case UNPROCESSABLE_ENTITY:
        error = new UnprocessableEntity();
        break;
      default:
        error = new ApiError();
        break;
    }

    return Promise.reject(error);
  },
);
