<template>
  <v-btn block color="primary">{{ $t('priceQuote.sendBtn') }}</v-btn>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'FormSend',
  data() {
    return {
      message: 'FormSend works!',
    };
  },
});
</script>

<style scope lang="scss">
.v-btn {
  color: var(--v-gray-darken4) !important;
}
</style>
