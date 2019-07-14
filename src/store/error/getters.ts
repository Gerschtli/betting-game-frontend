import { GetterTree } from 'vuex';

import { RootState } from '../types';

import { ErrorState } from './types';

export const MESSAGE = 'MESSAGE';
export const MULTI_LINE = 'MULTI_LINE';

export const getters: GetterTree<ErrorState, RootState> = {
  [MESSAGE](state: ErrorState): string | undefined {
    return state.message;
  },
  [MULTI_LINE](state: ErrorState): boolean {
    return state.multiLine;
  },
};
