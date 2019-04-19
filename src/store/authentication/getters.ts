import { GetterTree } from 'vuex';
import { AuthenticationState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<AuthenticationState, RootState> = {
  accessToken(state: AuthenticationState): string | undefined {
    return state.accessToken;
  },
};
