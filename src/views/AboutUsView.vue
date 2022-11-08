<template>
  <v-row class="mb-0">
    <v-spacer />
    <v-col cols="12" md="6" class="pa-0">
      <v-card class="pa-8 mt-0 mb-4">
        <v-card-title>{{ $t('aboutUs.working') }}</v-card-title>
        <v-img src="@/assets/UCW.png" alt="under construction image" class="mr-5"></v-img>
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
