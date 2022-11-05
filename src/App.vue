<template>
  <v-app>
    <AppBar />

    <v-main :class="{ 'pa-0': $route.name === 'home' }">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import AppBar from '@/components/AppBar.vue';

export default Vue.extend({
  name: 'App',
  components: { AppBar },

  // TO-DO uncomment for darkMode support
  beforeMount() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) this.$vuetify.theme.dark = true;
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
