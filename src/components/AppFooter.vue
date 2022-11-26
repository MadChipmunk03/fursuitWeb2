<template>
  <v-footer app fixed padless width="100vw">
    <v-card flat tile class="primary lighten-1 white--text text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text"> {{ new Date().getFullYear() }} — <strong>Vuetify</strong> </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppFooter',
  data() {
    return {
      icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
      message: 'AppFooter works!',
    };
  },
});
</script>

<style scope lang="scss"></style>
