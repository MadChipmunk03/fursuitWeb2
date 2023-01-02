<template>
  <v-app>
    <AppBar />
    <v-main :class="{ 'pt-0': $route.name === 'home' }">
      <router-view />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import AppBar from '@/components/AppLayout/AppBar.vue';
import AppFooter from './components/AppLayout/AppFooter.vue';

export default Vue.extend({
  name: 'App',
  components: { AppBar, AppFooter },
  // TO-DO uncomment for darkMode support
  beforeMount() {
    //theme
    const isDarkTheme = localStorage.getItem('isDarkTheme');
    if (isDarkTheme === null && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
      this.$vuetify.theme.dark = true;
    else if (isDarkTheme === 'true') this.$vuetify.theme.dark = true;
    else if (isDarkTheme === 'false') this.$vuetify.theme.dark = false;
  },
});
</script>
<style>
@import url('https://fonts.cdnfonts.com/css/bahnschrift');
.v-application {
  font-family: 'bahnschrift', sans-serif !important;
}

html {
  min-height: 100%;
  overflow-y: auto;
}
body {
  min-height: 100%;
}
</style>
