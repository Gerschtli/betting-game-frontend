import { ActionTree } from 'vuex';

import { login, logout } from '@/services/authentication';

import { RootState } from '../types';

import { RESET_ACCESS_TOKEN, SET_ACCESS_TOKEN } from './mutations';
import { AuthenticationState } from './types';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const actions: ActionTree<AuthenticationState, RootState> = {
  async [LOGIN]({ commit }, data: { username: string, password: string }): Promise<boolean | null> {
    const response = await login(data.username, data.password);

    if (!response) {
      return response;
    }

    commit(SET_ACCESS_TOKEN, response.data.access_token);
    return true;
  },

  async [LOGOUT]({ commit }): Promise<void> {
    await logout();
    commit(RESET_ACCESS_TOKEN);
  },
};
