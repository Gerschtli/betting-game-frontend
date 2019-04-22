import VeeValidate from 'vee-validate';
import localeDe from 'vee-validate/dist/locale/de.js';
import Vue from 'vue';

Vue.use(VeeValidate, {
  locale: 'de',
  dictionary: {
    de: {
      messages: localeDe.messages,
    },
  },
});
