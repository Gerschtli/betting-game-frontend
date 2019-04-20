import '@babel/polyfill';
import Vue from 'vue';

import './plugins/axios';
import './plugins/vee-validate';
import './plugins/vuetify';

import App from './App.vue';
import { router } from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
