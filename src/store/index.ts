import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import { authentication, authenticationNamespace } from './authentication';
import { error, errorNamespace } from './error';
import { RootState } from './types';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  strict: process.env.NODE_ENV !== 'production',
  state: {},
  modules: {
    [authenticationNamespace]: authentication,
    [errorNamespace]: error,
  },
};

export default new Vuex.Store<RootState>(store);
