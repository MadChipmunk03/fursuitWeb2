<template>
  <v-row class="mb-0 mx-0 py-0">
    <v-spacer />
    <v-col cols="12" md="6" class="pa-0">
      <v-card class="pa-4 mb-4" align="center" justify="center">
        <ComissionsAre />
        <ComissionsList />
      </v-card>
    </v-col>
    <v-spacer />
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import ComissionsAre from '@/components/Home/ComissionsAre.vue';
import ComissionsList from '@/components/Comissions/ComissionsList.vue';

export default Vue.extend({
  name: 'ComissionsView',
  components: { ComissionsAre, ComissionsList },
  data() {
    return {
      message: 'ComissionsView works!',
    };
  },
});
</script>

<style scope lang="scss"></style>
