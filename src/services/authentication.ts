import axios from 'axios';

import { Unauthorized } from '@/errors';

async function login(username: string, password: string): Promise<any> {
  try {
    const response = await axios.post('/auth/login', { username, password });

    return response;
  } catch (error) {
    if (!(error instanceof Unauthorized)) {
      // tslint:disable no-console
      console.warn(error);
    }

    return null;
  }
}

async function logout(): Promise<void> {
  try {
    await axios.post('/auth/logout');
  } catch (error) {
    if (!(error instanceof Unauthorized)) {
      // tslint:disable no-console
      console.warn(error);
    }
  }
}

export {
  login,
  logout,
};
