import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { authentication, authenticationNamespace } from './authentication';

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
