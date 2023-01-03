<template>
  <div class="py-8 px-3">
    <v-row v-for="(comission, ix) in comissions.slice(0, 5)" :key="ix" @click="routeTo(comission.title)">
      <v-col v-if="ix % 2 === 1 && $vuetify.breakpoint.name !== 'xs'" cols="12" sm="6" class="pa-0">
        <v-img :src="comission.src" contain></v-img>
      </v-col>
      <v-col cols="12" sm="6" class="pa-0">
        <v-sheet color="primary" class="fill-height d-flex flex-column">
          <h1 class="mt-auto">{{ comission.title }}</h1>
          <h2 class="mb-auto">{{ comission.speciece }}</h2>
        </v-sheet>
      </v-col>
      <v-col v-if="ix % 2 === 0 || $vuetify.breakpoint.name === 'xs'" cols="12" sm="6" class="pa-0">
        <v-img contain :src="comission.src"></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';

interface comission {
  src: string;
  title: string;
  speciece: string;
  specieceCs: string;
  specieceEn: string;
  desctiption: string;
}

export default Vue.extend({
  name: 'LatestComissions',
  data() {
    return {
      comissions: [] as comission[],
    };
  },
  methods: {
    routeTo(routeHash: string) {
      this.$router.push({ name: 'comissions', hash: '#' + routeHash });
    },
  },
  created() {
    axios
      .get('config.json')
      .then(res => {
        this.comissions = res.data.comissions;
        this.comissions.forEach(com => {
          com.speciece = this.$i18n.locale === 'en' ? com.specieceEn : com.specieceCs;
        });
      })
      .catch(err => console.log(err));
  },
});
</script>

<style scope lang="scss"></style>
