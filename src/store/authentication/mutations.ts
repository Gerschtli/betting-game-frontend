import { MutationTree } from 'vuex';
import { AuthenticationState } from './types';

export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';
export const RESET_ACCESS_TOKEN = 'RESET_ACCESS_TOKEN';

export const mutations: MutationTree<AuthenticationState> = {
  [SET_ACCESS_TOKEN](state: AuthenticationState, payload: string): void {
    state.accessToken = payload;
    localStorage.accessToken = payload;
  },

  [RESET_ACCESS_TOKEN](state: AuthenticationState): void {
    state.accessToken = undefined;
    localStorage.accessToken = undefined;
  },
};
