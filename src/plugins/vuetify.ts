import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: { customProperties: true },
    themes: {
      light: {
        primary: colors.amber,
        primaryInvert: '#2A92AB',
      },
      dark: {
        primary: '#2A92AB',
        primaryInvert: colors.amber,
      },
      
    },
  },
});
