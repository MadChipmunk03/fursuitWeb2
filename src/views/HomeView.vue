<template>
  <div>
    <MainSlideShow />
    <v-row class="mb-0 mx-0">
      <v-spacer />
      <v-col cols="12" md="6" class="px-0">
        <v-card class="pa-4 mb-4" align="center" justify="center">
          <CommisionsAre />
          <v-divider />
          <LatestComissions />
          <v-divider />
          <iframe
            src="TwitterFeed.htm"
            :width="twitterFeedDimensions.width"
            :style="twitterFeedDimensions.ratio"
            class="my-4"
            title="TwitterFeed preview"
          ></iframe>
        </v-card>
      </v-col>
      <v-spacer />
    </v-row>
  </div>
</template>

<script lang="ts">
import CommisionsAre from '@/components/Home/ComissionsAre.vue';
import MainSlideShow from '@/components/Home/MainSlideShow.vue';
import LatestComissions from '@/components/Home/LatestComissions.vue';
import Vue from 'vue';
export default Vue.extend({
  name: 'HomeView',
  components: { MainSlideShow, CommisionsAre, LatestComissions },
  computed: {
    twitterFeedDimensions() {
      if (this.$vuetify.breakpoint.name == 'xs') return { width: '100%', ratio: 'aspect-ratio: 1 / 1' };
      else if (this.$vuetify.breakpoint.name === 'sm') return { width: '70%', ratio: 'aspect-ratio: 2 / 1' };
      else return { width: '100%', ratio: 'aspect-ratio: 2 / 1' };
    },
  },
});
</script>

<style type="scss" scoped></style>
