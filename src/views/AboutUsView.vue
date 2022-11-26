<template>
  <v-row class="mb-0 mx-0">
    <v-spacer />
    <v-col cols="12" md="6" class="pa-0">
      <v-card class="pa-8 mt-0 mb-4">
        <h2 class="mb-4">{{ $t('aboutUs.header') }}</h2>
        <p>{{ $t('aboutUs.text') }}</p>
      </v-card>
    </v-col>
    <v-spacer />
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AboutUsView',
});
</script>

<style scope lang="scss"></style>
