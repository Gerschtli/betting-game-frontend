import { MutationTree } from 'vuex';

import { ErrorState } from './types';

export const SET = 'SET';
export const RESET = 'RESET';

export const mutations: MutationTree<ErrorState> = {
  [SET](state: ErrorState, payload: { message: string }): void {
    state.message = payload.message;
    state.multiLine = payload.message.length > 50;
  },

  [RESET](state: ErrorState): void {
    state.message = undefined;
  },
};
