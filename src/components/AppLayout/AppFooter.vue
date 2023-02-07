<template>
  <v-footer app absolute padless>
    <v-card flat tile class="primary lighten-1 black--text text-center" width="100%">
      <v-card-text>
        <v-btn
          v-for="social in socials"
          :key="social.url"
          class="mx-4"
          :class="isDark ? 'white--text' : 'black--text'"
          icon
          :href="social.url"
        >
          <v-icon v-if="social.icon.substring(0, 4) === 'mdi-'" size="24px">
            {{ social.icon }}
          </v-icon>
          <v-img v-else :src="social.icon" :class="{ invertIcon: isDark }" max-height="24px" max-width="24px"> </v-img>
        </v-btn>
      </v-card-text>

      <v-divider class="pb-4" />

      <v-card-text :class="isDark ? 'white--text' : 'black--text'" class="pt-0"> (C) Made By Bambi </v-card-text>
      <v-card-text :class="isDark ? 'white--text' : 'black--text'" class="pt-0">
        Website made by MadChipmunk03
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppFooter',
  data() {
    return {
      socials: [
        { icon: 'mdi-twitter', url: 'https://twitter.com/Bambilijas?t=xMcHeGzn7xZLPjwb6WElbg&s=09' },
        { icon: 'mdi-instagram', url: 'https://www.instagram.com/p/Ckh-GF0qaye/?igshid=MDJmNzVkMjY=' },
        { icon: require('@/assets/footer/telegram.svg'), url: 'https://t.me/bambisworkshop' },
        { icon: require('@/assets/footer/koFi.svg'), url: 'https://ko-fi.com/bambilijas' },
        { icon: require('@/assets/footer/discord.svg'), url: 'https://discord.gg/TJzEnSa' },
      ],
    };
  },
  computed: {
    isDark(): boolean {
      return this.$vuetify.theme.dark;
    },
  },
});
</script>

<style scope lang="scss">
.invertIcon {
  filter: invert(1);
}
</style>
