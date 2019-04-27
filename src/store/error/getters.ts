import { GetterTree } from 'vuex';

import { RootState } from '../types';

import { ErrorState } from './types';

export const MESSAGE = 'MESSAGE';

export const getters: GetterTree<ErrorState, RootState> = {
  [MESSAGE](state: ErrorState): string | undefined {
    return state.message;
  },
};
