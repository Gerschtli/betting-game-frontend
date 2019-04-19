import { ActionTree } from 'vuex';
import { login, logout } from '@/services/authentication';
import { AuthenticationState } from './types';
import { RootState } from '../types';

export const actions: ActionTree<AuthenticationState, RootState> = {
  async login({ commit }, data: { username: string, password: string }): Promise<boolean> {
    const response = await login(data.username, data.password);

    if (response == null) {
      return false;
    }

    commit('login', response.data.access_token);
    return true;
  },
  async logout({ commit }): Promise<void> {
    await logout();
    commit('logout');
  },
};
