import VeeValidate from 'vee-validate';
import localeDe from 'vee-validate/dist/locale/de.js';
import Vue from 'vue';

Vue.use(VeeValidate, {
  locale: 'de',
  dictionary: {
    de: {
      messages: {
        generalError: 'Ein unerwarter Fehler ist aufgetreten. Bitte noch einmal versuchen oder den Fehler melden.',
        loginFailed: 'Login fehlgeschlagen.',
        tokenInvalid: 'Login abgelaufen, bitte neu einloggen.',

        ...localeDe.messages,
      },
    },
  },
});
