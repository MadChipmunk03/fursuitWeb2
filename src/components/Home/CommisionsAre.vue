<template>
  <div>
    <h1 class="text-center">{{ $t('home.title') }}</h1>
    <h2 v-if="commisionsAreOpen" class="text-center open" color="primary">{{ $t('home.open') }}</h2>
    <h2 v-else class="text-center close" color="primary">{{ $t('home.close') }}</h2>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import Vue from 'vue';

export default Vue.extend({
  name: 'CommisionsAre',
  data() {
    return {
      message: 'CommisionsAre works!',
      commisionsAreOpen: false,
    };
  },
  created() {
    axios
      .get('config.json')
      .then(res => (this.commisionsAreOpen = res.data.commisionsAreOpen))
      .catch(err => console.log(err));
  },
});
</script>

<style scope lang="scss">
.close {
  color: var(--v-error-base);
}

.open {
  color: var(--v-success-base);
}
</style>
