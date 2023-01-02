<template>
  <v-footer app absolute padless>
    <v-card flat tile class="primary lighten-1 black--text text-center" width="100%">
      <v-card-text>
        <v-btn v-for="social in socials" :key="social.url" class="mx-4 black--text" icon :href="social.url">
          <v-icon size="24px" v-if="social.icon.substring(0, 4) === 'mdi-'">
            {{ social.icon }}
          </v-icon>
          <v-img v-else :src="social.icon" max-height="24px" max-width="24px"></v-img>
        </v-btn>
      </v-card-text>

      <v-divider class="pb-4" />

      <v-card-text class="black--text pt-0"> (C) Made By Bambi </v-card-text>
      <v-card-text class="black--text pt-0"> {{ $t('footer.webMadeBy') }} MadChipmunk03 </v-card-text>
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
        { icon: require('@/assets/footer/telegram.svg'), url: 'https://t.me/Bambilijas' },
        { icon: require('@/assets/footer/koFi.svg'), url: 'https://ko-fi.com/bambilijas' },
        { icon: require('@/assets/footer/discord.svg'), url: 'https://discord.gg/TJzEnSa' },
      ],
    };
  },
});
</script>

<style scope lang="scss">
.invertIcon {
  filter: invert(1);
}
</style>
