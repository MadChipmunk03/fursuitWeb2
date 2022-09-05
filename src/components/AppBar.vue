<template>
  <v-app-bar light color="primary" elevation="15" height="100" app>
    <v-spacer></v-spacer>
    <v-img src="@/assets/BambihoFanClub.png" alt="Bambi logo" max-height="80" max-width="80" class="mr-5"></v-img>
    <v-app-bar-title v-if="$vuetify.breakpoint.name !== 'xs'" class="bambiHeader">Bambilijáš</v-app-bar-title>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppBar',
});
</script>

<style scope lang="scss">
.bambiHeader {
  font-family: 'MrDafoe', Helvetica, Arial;
  font-size: 60px;
}

.v-app-bar-title__content {
  visibility: visible !important;
}
</style>
