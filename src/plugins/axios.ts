import axios from 'axios';
import { BAD_REQUEST, UNAUTHORIZED, UNPROCESSABLE_ENTITY } from 'http-status-codes';

import { ApiError, BadRequest, Unauthorized, UnprocessableEntity } from '@/errors';
import store from '@/store';

axios.defaults.baseURL = 'http://192.168.56.101:5000';

axios.interceptors.request.use(
  (config) => {
    const accessToken = store.getters['authentication/accessToken'];
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  Promise.reject,
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    switch (error.response.status) {
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
