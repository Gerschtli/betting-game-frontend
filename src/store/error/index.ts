import { Module } from 'vuex';

import { RootState } from '../types';

import { getters } from './getters';
import { mutations } from './mutations';
import { ErrorState } from './types';

export const errorNamespace = 'error';

export const error: Module<ErrorState, RootState> = {
  namespaced: true,
  state: {
    message: undefined,
    multiLine: false,
  },
  getters,
  mutations,
};
