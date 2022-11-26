<template>
  <v-container>
    <v-row class="pa-0">
      <v-col>
        <v-subheader> {{ $t('appBar.langTitle') }}: </v-subheader>
      </v-col>
      <v-col>
        <v-select v-model="language.selected" :items="language.vals" label="Solo field" solo></v-select>
      </v-col>
    </v-row>
    <v-row class="pa-0">
      <v-col>
        <v-subheader> {{ $t('appBar.themeTitle') }}: </v-subheader>
      </v-col>
      <v-col>
        <v-select v-model="theme.selected" :items="theme.vals" label="Solo field" solo></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'UserSettings',
  data() {
    return {
      message: 'UserSettings works!',
      language: {
        vals: this.$t('appBar.langs'),
        selected: this.$t('appBar.langs[0]'),
      },
      theme: {
        vals: this.$t('appBar.themes'),
        selected: this.$t('appBar.themes[0]'),
      },
    };
  },
  watch: {
    'language.selected'(newValue) {
      switch (this.$t('appBar.langs').indexOf(newValue)) {
        case 0: //auto
          localStorage.setItem('lang', '');
          this.$i18n.locale = '';
          break;
        case 1:
          localStorage.setItem('lang', 'cs');
          this.$i18n.locale = 'cs';
          break;
        case 2:
          localStorage.setItem('lang', 'en');
          this.$i18n.locale = 'en';
          break;
      }
    },
    'theme.selected'(newValue) {
      const themeId = this.$t('appBar.themes').indexOf(newValue);
      localStorage.setItem('theme', themeId);
    },
  },
});
</script>

<style scope lang="scss">
.v-messages,
.v-text-field__details {
  display: none !important;
}
</style>
