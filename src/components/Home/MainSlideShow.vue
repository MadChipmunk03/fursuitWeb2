<template>
  <div class="parallax">
    <v-carousel cycle height="100vh" hide-delimiters :show-arrows="false" class="py-0 mt-0">
      <v-carousel-item v-for="(item, i) in compImages" :key="i" :src="item.src" eager>
        <v-sheet class="coursel--item--sheet" height="100%">
          <v-row class="fill-height mt-0" align="center" justify="center">
            <v-sheet color="transparent">
              <h2 class="text-h4">
                <span class="typed--text">{{ typewriter }}</span
                ><span class="typewriter--cursor">|</span>
              </h2>
            </v-sheet>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';

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
        { src: require('@/assets/homepage/proto_1.jpg'), orientation: ImgOrient.HORIZONTAL },
        { src: require('@/assets/homepage/proto_5.jpg'), orientation: ImgOrient.BOTH },
        { src: require('@/assets/homepage/proto_2.jpg'), orientation: ImgOrient.HORIZONTAL },
        { src: require('@/assets/homepage/proto_3.jpg'), orientation: ImgOrient.HORIZONTAL },
        { src: require('@/assets/homepage/proto_4.jpg'), orientation: ImgOrient.BOTH },
        { src: require('@/assets/homepage/proto_6.jpg'), orientation: ImgOrient.HORIZONTAL },
        { src: require('@/assets/homepage/proto_7.jpg'), orientation: ImgOrient.BOTH },
      ],
      texts: ['Bambilijáš', '❤❤❤', 'Eeeeeeeeeeeeeeee!'],
      typewriter: '',
    };
  },
  methods: {
    async changeTypewriter() {
      const tpm = this.typewriter;
      const newTypewriter = this.texts[(this.texts.indexOf(tpm) + 1) % this.texts.length];

      for (let i = tpm.length; i >= 0; i--) {
        await new Promise(resolve => {
          setTimeout(() => resolve('done!'), 100);
        });
        this.typewriter = tpm.substring(0, i);
      }
      for (let i = 0; i <= newTypewriter.length; i++) {
        await new Promise(resolve => {
          setTimeout(() => resolve('done!'), 100);
        });
        this.typewriter = newTypewriter.substring(0, i);
      }
      this.typewriter = newTypewriter;
    },
    startInterval() {
      setInterval(this.changeTypewriter, 5000);
    },
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
  },
  beforeMount() {
    for (let i = 0; i <= this.images.length; i++) {
      this.images.sort(() => (Math.random() > 0.5 ? 1 : -1));
    }
  },
  created() {
    axios
      .get('config.json')
      .then(res => (this.texts = res.data.typewriter))
      .catch(err => console.log(err));
    this.typewriter = this.texts[0];
    this.startInterval();
  },
});
</script>

<style type="scss" scoped>
.parallax {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
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

.typewriter--cursor {
  opacity: 1;
  color: white;
  animation: flickerAnimation 0.75s infinite;
}

@keyframes flickerAnimation {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
