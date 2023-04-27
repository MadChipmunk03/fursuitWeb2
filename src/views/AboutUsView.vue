<template>
  <v-row class="mb-0 mx-0">
    <v-spacer />
    <v-col cols="12" md="6" class="pa-0">
      <v-card class="pa-8 mt-0 mb-4">
        <h2 class="mb-4">{{ $t('aboutUs.header') }}</h2>
        <p>{{ $t('aboutUs.text') }}</p>

        <AboutUsSocials />

        <h2 class="mb-4">{{ $t('aboutUs.downloadsTitle') }}</h2>
        <ul>
          <li v-for="link in downloads" :key="link.i18n">
            <a :href="link.url" target="_blank">{{ $t(`aboutUs.downloads.${link.i18n}`) }}</a>
          </li>
        </ul>
      </v-card>
    </v-col>
    <v-spacer />
  </v-row>
</template>

<script lang="ts">
import AboutUsSocials from '@/components/AppLayout/AboutUsSocials.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'AboutUsView',
  data() {
    return {
      downloads: [
        { url: 'https://madebybambi.com/files/NFC_Tag_Manual.pdf', i18n: 'nfcTag' },
        { url: 'https://madebybambi.com/files/Protogen_PCB.pdf', i18n: 'protogenPcb' },
      ],
    };
  },
  computed: {
    isMobile() {
      const size = this.$vuetify.breakpoint.name;
      return ['xs', 'sm'].includes(size);
    },
  },
  components: { AboutUsSocials },
});
</script>

<style scope lang="scss"></style>
