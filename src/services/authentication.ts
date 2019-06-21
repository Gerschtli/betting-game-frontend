import axios from 'axios';

import { InputValidationError } from '@/errors';

import { logError } from './error';

async function login(username: string, password: string): Promise<any> {
  try {
    const response = await axios.post('/auth/login', { username, password });

    return response;
  } catch (error) {
    logError(error);
    if (error instanceof InputValidationError) {
      throw error;
    }
    return null;
  }
}

async function logout(): Promise<void> {
  try {
    await axios.post('/auth/logout');
  } catch (error) {
    logError(error);
  }
}

export {
  login,
  logout,
};
