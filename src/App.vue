<template>
  <v-app>
    <AppBar />

    <v-main>
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
  // beforeMount() {
  //   if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
  //     this.$vuetify.theme.dark = true;
  // }
});
</script>

<style>
html {
  overflow-y: auto;
}
body {
  min-height: 100vh;
}
@font-face {
  font-family: 'MrDafoe';
  src: local('MrDafoe'), url('./fonts/MrDafoe/MrDafoe-Regular.eot?#iefix') format('embedded-opentype'),
    url('./fonts/MrDafoe/MrDafoe-Regular.woff2') format('woff2'),
    url('./fonts/MrDafoe/MrDafoe-Regular.woff') format('woff'),
    url('./fonts/MrDafoe/MrDafoe-Regular.ttf') format('truetype'),
    url('./fonts/MrDafoe/MrDafoe-Regular.svg#svgFontName') format('svg');
}
</style>
