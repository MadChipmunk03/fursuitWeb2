<template>
  <v-container class="px-0 mx-0">
    <h2 class="mb-4">{{ $t('aboutUs.socialsTitle') }}</h2>

    <div class="cards" :style="isWide">
      <v-card
        v-for="(social, ix) in socials"
        :key="ix"
        :href="social.url"
        target="_blank"
        elevation="4"
        class="ma-2 pa-2 pt-4 text-center d-flex flex-column align-center justify-center"
      >
        <v-icon v-if="social.icon.substring(0, 4) === 'mdi-'" size="24px">
          {{ social.icon }}
        </v-icon>
        <v-img v-else :src="social.icon" :class="isDark ? 'invertIcon' : 'normalIcon'" max-height="24px" max-width="24px"> </v-img>
        <v-card-actions>{{ social.caption }}</v-card-actions>
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
          url: 'https://t.me/bambisworkshop',
          caption: 'Telegram (Workshop)',
        },
        {
          icon: require('@/assets/footer/telegram.svg'),
          url: 'https://t.me/Bambilijas',
          caption: 'Telegram (Bambilijáš)',
        },
        { icon: require('@/assets/footer/koFi.svg'), url: 'https://ko-fi.com/bambilijas', caption: 'KoFi' },
        { icon: require('@/assets/footer/discord.svg'), url: 'https://discord.gg/TJzEnSa', caption: 'Discord' },
        { icon: 'mdi-trello', url: 'https://trello.com/b/twL8gdNc/bambis-workshop', caption: 'Trello' },
        {
          icon: 'mdi-email-outline',
          url: 'mailto: info.madebybambi@gmail.com',
          caption: 'Email',
        },
      ],
    };
  },
  computed: {
    isWide() {
      return ['xl', 'lg', 'sm'].includes(this.$vuetify.breakpoint.name)
        ? 'grid-template-columns: 1fr 1fr 1fr 1fr;'
        : 'grid-template-columns: 1fr 1fr;';
    },
    isDark(): boolean {
      return this.$vuetify.theme.dark;
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
.normalIcon {
  filter: invert(0.5);
}
.invertIcon {
  filter: invert(1);
}
</style>
