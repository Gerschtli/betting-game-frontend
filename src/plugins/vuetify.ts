import Vue from 'vue';
import colors from 'vuetify/es5/util/colors';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  theme: {
    primary: colors.blue.base, // #2196F3
    secondary: colors.blue.darken2, // #1976D2
    accent: colors.red.lighten1, // #EF5350
  },
});
