import { GetterTree } from 'vuex';

import { RootState } from '../types';

import { AuthenticationState } from './types';

export const ACCESS_TOKEN = 'ACCESS_TOKEN';
export const IS_AUTHENTICATED = 'IS_AUTHENTICATED';

export const getters: GetterTree<AuthenticationState, RootState> = {
  [ACCESS_TOKEN](state: AuthenticationState): string | undefined {
    return state.accessToken;
  },

  [IS_AUTHENTICATED](state: AuthenticationState): boolean {
    return state.accessToken !== undefined;
  },
};
