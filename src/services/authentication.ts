import axios from 'axios';

import { Unauthorized } from '@/errors';

async function login(username: string, password: string): Promise<any> {
  try {
    const response = await axios.post('/auth/login', { username, password });

    return response;
  } catch (error) {
    if (!(error instanceof Unauthorized)) {
      console.warn(error);
    }

    return null;
  }
}

export {
  login,
};
