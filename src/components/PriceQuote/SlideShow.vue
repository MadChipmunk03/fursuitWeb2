<template>
  <v-container>
    <v-carousel v-model="model" :style="carouselStyle">
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SlideShow',
  data: () => ({
    model: 0,
    items: [
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      },
    ],
  }),
  computed: {
    carouselStyle() {
      if (this.$vuetify.breakpoint.name === 'xs')
        return {
          height: '300px',
        };
      else if (this.$vuetify.breakpoint.name === 'sm')
        return {
          height: '250px',
        };
      else return {};
    },
  },
});
</script>

<style scope lang="scss"></style>
