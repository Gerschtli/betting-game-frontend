import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { authentication } from './authentication';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  strict: process.env.NODE_ENV !== 'production',
  state: {
    version: '1.0.0', // a simple property
  },
  modules: {
    authentication,
  },
};

export default new Vuex.Store<RootState>(store);
