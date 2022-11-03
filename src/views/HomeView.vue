<template>
  <v-carousel cycle height="100vh" hide-delimiters :show-arrows="false" class="py-0 mt-0">
    <v-carousel-item
      reverse-transition="fade-transition"
      transition="fade-transition"
      v-for="(item, i) in compImages"
      :key="i"
      :src="item.src"
      ><!--  -->
      <v-sheet class="coursel--item--sheet" height="100%">
        <v-row class="fill-height mt-0" align="center" justify="center">
          <p class="text-h2 text-bold white--text">Made by <span class="primary--text">BAMBI</span></p>
          <p class="text-h4">{{ compText }}</p>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
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
  data() {
    return {
      images: [
        {
          src: require('@/assets/homepage/proto_1.jpg'),
          orientation: ImgOrient.HORIZONTAL,
        },
        {
          src: require('@/assets/homepage/bambi_1.jpg'),
          orientation: ImgOrient.BOTH,
        },
        {
          src: require('@/assets/homepage/proto_5.jpg'),
          orientation: ImgOrient.BOTH,
        },
        {
          src: require('@/assets/homepage/bambi_8.jpg'),
          orientation: ImgOrient.BOTH,
        },
        {
          src: require('@/assets/homepage/proto_2.jpg'),
          orientation: ImgOrient.HORIZONTAL,
        },
        {
          src: require('@/assets/homepage/bambi_9.jpg'),
          orientation: ImgOrient.HORIZONTAL,
        },
        {
          src: require('@/assets/homepage/bambi_2.jpg'),
          orientation: ImgOrient.BOTH,
        },
        {
          src: require('@/assets/homepage/proto_3.jpg'),
          orientation: ImgOrient.HORIZONTAL,
        },
        {
          src: require('@/assets/homepage/bambi_10.jpg'),
          orientation: ImgOrient.HORIZONTAL,
        },
        {
          src: require('@/assets/homepage/bambi_3.jpg'),
          orientation: ImgOrient.BOTH,
        },
        {
          src: require('@/assets/homepage/proto_4.jpg'),
          orientation: ImgOrient.BOTH,
        },
        {
          src: require('@/assets/homepage/bambi_4.jpg'),
          orientation: ImgOrient.HORIZONTAL,
        },
        {
          src: require('@/assets/homepage/bambi_5.jpg'),
          orientation: ImgOrient.HORIZONTAL,
        },
        {
          src: require('@/assets/homepage/proto_6.jpg'),
          orientation: ImgOrient.HORIZONTAL,
        },
        {
          src: require('@/assets/homepage/bambi_6.jpg'),
          orientation: ImgOrient.HORIZONTAL,
        },
        {
          src: require('@/assets/homepage/proto_7.jpg'),
          orientation: ImgOrient.BOTH,
        },
        {
          src: require('@/assets/homepage/bambi_7.jpg'),
          orientation: ImgOrient.HORIZONTAL,
        },
      ],
      texts: ['UwU', '❤❤❤'],
    };
  },
  computed: {
    compImages(): any {
      if (this.$vuetify.breakpoint.name === 'xs')
        return this.images.filter(
          (img: any) => img.orientation === ImgOrient.VERTICAL || img.orientation === ImgOrient.BOTH
        );
      else
        return this.images.filter(
          (img: any) => img.orientation === ImgOrient.HORIZONTAL || img.orientation === ImgOrient.BOTH
        );
    },
    compText(): string {
      return this.texts[1];
    },
  },
});
</script>

<style type="scss" scoped>
.coursel--item--sheet {
  background: no-repeat center center fixed !important;
}
</style>
