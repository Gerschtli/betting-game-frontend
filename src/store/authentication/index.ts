import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { AuthenticationState } from './types';
import { RootState } from '../types';

export const authenticationNamespace = 'authentication';

export const authentication: Module<AuthenticationState, RootState> = {
  namespaced: true,
  state(): AuthenticationState {
    return {
      accessToken: localStorage.getItem('accessToken') || undefined,
    };
  },
  getters,
  actions,
  mutations,
};
