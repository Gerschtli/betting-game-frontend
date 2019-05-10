import { MutationTree } from 'vuex';

import { UpdateState } from './types';

export const SET = 'SET';

export const mutations: MutationTree<UpdateState> = {
  [SET](state: UpdateState, payload: { updateHandler: () => void }): void {
    state.updateHandler = payload.updateHandler;
  },
};
