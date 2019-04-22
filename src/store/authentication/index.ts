import { Module } from 'vuex';

import { RootState } from '../types';

import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';
import { AuthenticationState } from './types';

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
