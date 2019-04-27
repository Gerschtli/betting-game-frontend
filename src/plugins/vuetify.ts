import Vue from 'vue';
import colors from 'vuetify/es5/util/colors';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  theme: {
    primary: colors.blueGrey.lighten1, // #78909C
    secondary: colors.blueGrey.darken3, // #37474F
    accent: colors.teal.lighten1, // #26A69A
  },
});
