import { Module } from 'vuex';

import { RootState } from '../types';

import { getters } from './getters';
import { mutations } from './mutations';
import { UpdateState } from './types';

export const updateNamespace = 'update';

export const update: Module<UpdateState, RootState> = {
  namespaced: true,
  state: {
    updateHandler: undefined,
  },
  getters,
  mutations,
};
