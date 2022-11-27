<template>
  <iframe
    src="TwitterFeed.htm"
    :width="twitterFeedDimensions.width"
    :style="twitterFeedDimensions.ratio"
    class="my-4"
    title="TwitterFeed preview"
  ></iframe>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TwitterFeed',
  data() {
    return {
      message: 'TwitterFeed works!',
    };
  },
  computed: {
    twitterFeedDimensions() {
      if (this.$vuetify.breakpoint.name == 'xs') return { width: '100%', ratio: 'aspect-ratio: 1 / 1' };
      else if (this.$vuetify.breakpoint.name === 'sm') return { width: '70%', ratio: 'aspect-ratio: 2 / 1' };
      else return { width: '100%', ratio: 'aspect-ratio: 2 / 1' };
    },
  },
});
</script>

<style scope lang="scss">
.wrapper {
  position: relative;
}
.wrapper > * {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.wrapper > iframe.loading {
  width: 0%;
  height: 0%;
}
</style>
