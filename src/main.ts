import '@babel/polyfill';

import Vue from 'vue';

import App from './App.vue';
import './plugins/axios';
import './plugins/veeValidate';
import './plugins/vuetify';
import './registerServiceWorker';
import { router } from './router';
import store from './store';

Vue.config.productionTip = process.env.NODE_ENV === 'production';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
