<template>
  <v-row>
    <v-spacer />
    <v-col cols="12" md="6" class="pa-0">
      <v-card class="pa-8 mt-0">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdjPJg_456KAAPMLp6VzshigdO33umgZM0hQzkWihqfuJUreg/viewform?embedded=true"
          width="100%"
          height="520"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </v-card>
    </v-col>
    <v-spacer />
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'MerchView',
  data() {
    return {
      message: 'MerchView works!',
    };
  },
});
</script>

<style scope lang="scss"></style>
