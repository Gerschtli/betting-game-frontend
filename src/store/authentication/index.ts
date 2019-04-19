import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { AuthenticationState } from './types';
import { RootState } from '../types';

const namespaced: boolean = true;

export const authentication: Module<AuthenticationState, RootState> = {
  namespaced,
  state(): AuthenticationState {
    return {
      accessToken: localStorage.accessToken || undefined,
    };
  },
  getters,
  actions,
  mutations,
};
