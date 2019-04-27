import { GetterTree } from 'vuex';

import { RootState } from '../types';

import { UpdateState } from './types';

export const HANDLER = 'HANDLER';

export const getters: GetterTree<UpdateState, RootState> = {
  [HANDLER](state: UpdateState): (() => void) | undefined {
    return state.updateHandler;
  },
};
