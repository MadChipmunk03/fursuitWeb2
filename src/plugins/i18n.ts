import Vue from 'vue';
import VueI18n from 'vue-i18n';
import cs from '@/locales/cs.json';
import en from '@/locales/en.json';

Vue.use(VueI18n);

export default new VueI18n({
  locale: localStorage.getItem('lang') || navigator.language, //TO-DO navigator.language
  fallbackLocale: 'en',
  messages: { cs, en },
});
