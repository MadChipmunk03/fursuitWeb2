<template>
  <v-container class="px-0 mx-0">
    <h2 class="mb-4">{{ $t('aboutUs.socialsTitle') }}</h2>

    <div class="cards" :style="isWide">
      <v-card
        v-for="social in socials"
        :key="social"
        class="ma-2 pa-2 text-center d-flex flex-column align-center justify-center"
      >
        <v-card-text>{{ social.caption }}</v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AboutUsSocials',
  data() {
    return {
      message: 'AboutUsSocials works!',
      socials: [
        {
          icon: 'mdi-twitter',
          url: 'https://twitter.com/Bambilijas?t=xMcHeGzn7xZLPjwb6WElbg&s=09',
          caption: 'Twitter',
        },
        {
          icon: 'mdi-instagram',
          url: 'https://www.instagram.com/p/Ckh-GF0qaye/?igshid=MDJmNzVkMjY=',
          caption: 'Instagram',
        },
        {
          icon: require('@/assets/footer/telegram.svg'),
          url: 'https://t.me/Bambilijas',
          caption: 'Telegram (Bambilijáš)',
        },
        { icon: require('@/assets/footer/koFi.svg'), url: 'https://ko-fi.com/bambilijas', caption: 'KoFi' },
        { icon: require('@/assets/footer/discord.svg'), url: 'https://discord.gg/TJzEnSa', caption: 'Discord' },
      ],
    };
  },
  computed: {
    isWide() {
      return ['xl', 'lg', 'sm'].includes(this.$vuetify.breakpoint.name)
        ? 'grid-template-columns: 1fr 1fr 1fr 1fr;'
        : 'grid-template-columns: 1fr 1fr;';
    },
  },
});
</script>

<style scope lang="scss">
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
}
</style>
