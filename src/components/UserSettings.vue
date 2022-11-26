<template>
  <div class="float-right" :class="{ 'pb-4': isMobile }">
    <v-btn icon class="mr-8" @click="switchLang">
      <v-img class="px-0" max-height="30" max-width="55" contain :src="langImg"></v-img>
    </v-btn>
    <v-btn small fab class="px-0 mr-5" @click="switchTheme">
      <v-icon>{{ themeIcon }}</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'UserSettings',
  methods: {
    switchLang() {
      const curLang = this.$i18n.locale;
      const newLang = curLang === 'cs' ? 'en' : 'cs';
      localStorage.setItem('lang', newLang);
      this.$i18n.locale = newLang;
      location.reload();
    },
    switchTheme() {
      const newTheme = !this.$vuetify.theme.dark;
      localStorage.setItem('isDarkTheme', String(newTheme));
      this.$vuetify.theme.dark = newTheme;
    },
  },
  computed: {
    langImg() {
      return this.$i18n.locale === 'cs' ? require('@/assets/Flag_cs.svg') : require('@/assets/Flag_en.svg');
    },
    themeIcon() {
      return this.$vuetify.theme.dark ? 'mdi-weather-night' : 'mdi-white-balance-sunny';
    },
    isMobile() {
      const size = this.$vuetify.breakpoint.name;
      return ['xs', 'sm'].includes(size);
    },
  },
});
</script>

<style scope lang="scss">
.v-messages,
.v-text-field__details {
  display: none !important;
}
</style>
