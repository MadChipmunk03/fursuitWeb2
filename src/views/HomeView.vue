<template>
  <v-sheet>
    <MainSlideShow />
    <v-row class="mb-0 mx-0">
      <v-spacer />
      <v-col cols="12" md="6" class="px-0">
        <v-card class="pa-4 mb-4"> 
          <CommisionsAre />
        </v-card>
      </v-col>
      <v-spacer />
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import CommisionsAre from '@/components/Home/CommisionsAre.vue';
import MainSlideShow from '@/components/Home/MainSlideShow.vue';
import Vue from 'vue';

enum ImgOrient {
  VERTICAL,
  HORIZONTAL,
  BOTH,
}

interface Image {
  src: string;
  orientation: ImgOrient;
}

export default Vue.extend({
  name: 'HomeView',
  components: { MainSlideShow, CommisionsAre },
});
</script>

<style type="scss" scoped>
</style>
