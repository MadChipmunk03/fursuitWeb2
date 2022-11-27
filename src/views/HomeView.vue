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
          <TwitterFeed />
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
import TwitterFeed from '@/components/Home/TwitterFeed.vue';
import Vue from 'vue';
export default Vue.extend({
  name: 'HomeView',
  components: { MainSlideShow, CommisionsAre, LatestComissions, TwitterFeed },
});
</script>

<style type="scss" scoped></style>
