import { GetterTree } from 'vuex';
import { AuthenticationState } from './types';
import { RootState } from '../types';

export const ACCESS_TOKEN = 'ACCESS_TOKEN';

export const getters: GetterTree<AuthenticationState, RootState> = {
  [ACCESS_TOKEN](state: AuthenticationState): string | undefined {
    return state.accessToken;
  },
};
