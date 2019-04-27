import axios from 'axios';
import { UNAUTHORIZED } from 'http-status-codes';

import { ApiError, Unauthorized } from '@/errors';
import store from '@/store';
import { authenticationNamespace } from '@/store/authentication';
import { ACCESS_TOKEN } from '@/store/authentication/getters';

axios.defaults.baseURL = process.env.VUE_APP_ROOT_API;

axios.interceptors.request.use(
  (config) => {
    const accessToken = store.getters[`${authenticationNamespace}/${ACCESS_TOKEN}`];
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
      case UNAUTHORIZED:
        error = new Unauthorized();
        break;
      default:
        error = new ApiError();
        break;
    }

    return Promise.reject(error);
  },
);
