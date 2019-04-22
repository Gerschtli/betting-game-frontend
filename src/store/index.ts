import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import { authentication, authenticationNamespace } from './authentication';
import { RootState } from './types';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  strict: process.env.NODE_ENV !== 'production',
  state: {
    _: undefined,
  },
  modules: {
    [authenticationNamespace]: authentication,
  },
};

export default new Vuex.Store<RootState>(store);
