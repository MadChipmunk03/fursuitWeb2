<template>
  <v-app>
    <AppBar />
    <v-main :class="{ 'pa-0': $route.name === 'home' }">
      <router-view />
    </v-main>

    <AppFooter v-if="false" />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import AppBar from '@/components/AppBar.vue';
import AppFooter from './components/AppFooter.vue';

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
html {
  overflow-y: auto;
}
body {
  min-height: 100vh;
}
</style>
