import Vue from 'vue';
import VueI18n from 'vue-i18n';
import cz from '@/locales/cz.json';
import en from '@/locales/en.json';

Vue.use(VueI18n);

export default new VueI18n({
  locale: 'cz', //TO-DO navigator.language
  fallbackLocale: 'en',
  messages: { cz, en },
});
