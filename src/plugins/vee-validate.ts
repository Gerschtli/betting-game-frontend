import Vue from 'vue';
import VeeValidate from 'vee-validate';
import localeDe from 'vee-validate/dist/locale/de.js';

Vue.use(VeeValidate, {
  locale: 'de',
  dictionary: {
    de: {
      messages: localeDe.messages,
    },
  },
});
