<template>
  <v-carousel cycle height="100vh" hide-delimiters :show-arrows="false" class="py-0 mt-0">
    <v-carousel-item
      v-for="(item, i) in compImages"
      :key="i"
      :src="item.src"
      eager
    >
      <v-sheet class="coursel--item--sheet" height="100%">
        <v-row class="fill-height mt-0" align="center" justify="center">
          <v-sheet color="transparent">
            <!-- <h2 class="text-h4 typed--text">{{ compText }}</h2> -->
          </v-sheet>
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
  name: 'MainSlideShow',
  data() {
    return {
      images: [
        { src: require('@/assets/homepage/bambi_1.jpg'), orientation: ImgOrient.BOTH },
        { src: require('@/assets/homepage/bambi_2.jpg'), orientation: ImgOrient.BOTH },
        { src: require('@/assets/homepage/bambi_3.jpg'), orientation: ImgOrient.BOTH },
        { src: require('@/assets/homepage/bambi_4.jpg'), orientation: ImgOrient.HORIZONTAL },
        { src: require('@/assets/homepage/bambi_5.jpg'), orientation: ImgOrient.HORIZONTAL },
        { src: require('@/assets/homepage/bambi_6.jpg'), orientation: ImgOrient.HORIZONTAL },
        { src: require('@/assets/homepage/bambi_7.jpg'), orientation: ImgOrient.HORIZONTAL },
        { src: require('@/assets/homepage/bambi_8.jpg'), orientation: ImgOrient.BOTH },
        { src: require('@/assets/homepage/bambi_9.jpg'), orientation: ImgOrient.HORIZONTAL },
        { src: require('@/assets/homepage/bambi_10.jpg'), orientation: ImgOrient.HORIZONTAL },
        { src: require('@/assets/homepage/proto_1.jpg'), orientation: ImgOrient.HORIZONTAL },
        { src: require('@/assets/homepage/proto_5.jpg'), orientation: ImgOrient.BOTH },
        { src: require('@/assets/homepage/proto_2.jpg'), orientation: ImgOrient.HORIZONTAL },
        { src: require('@/assets/homepage/proto_3.jpg'), orientation: ImgOrient.HORIZONTAL },
        { src: require('@/assets/homepage/proto_4.jpg'), orientation: ImgOrient.BOTH },
        { src: require('@/assets/homepage/proto_6.jpg'), orientation: ImgOrient.HORIZONTAL },
        { src: require('@/assets/homepage/proto_7.jpg'), orientation: ImgOrient.BOTH },
      ],
      texts: ['UwU', '❤❤❤', 'Eeeeeeeeeeeeeeee!'],
    };
  },
  computed: {
    compImages(): Image[] {
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
  beforeMount() {
    for (let i = 0; i <= this.images.length; i++) {
      this.images.sort(() => (Math.random() > 0.5 ? 1 : -1));
    }
  },
});
</script>

<style type="scss" scoped>
.home--container {
  width: 100vw;
}
.coursel--item--sheet {
  background: no-repeat center center fixed !important;
}

.typed--text {
  color: white;
  text-decoration: underline solid var(--v-primaryInvert-base);
  text-underline-offset: 8px;
}
</style>
