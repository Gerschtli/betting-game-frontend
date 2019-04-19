import { MutationTree } from 'vuex';
import { AuthenticationState } from './types';

export const mutations: MutationTree<AuthenticationState> = {
  login(state: AuthenticationState, payload: string): void {
    state.accessToken = payload;
    localStorage.accessToken = payload;
  },
  logout(state: AuthenticationState): void {
    state.accessToken = undefined;
    localStorage.accessToken = undefined;
  },
};
