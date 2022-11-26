<template>
  <v-container>
    <div v-for="(comission, ix) in comissions" :key="ix">
      <v-divider v-if="ix !== 0" class="my-4" />
      <v-sheet color="primary" class="d-flex" :id="comission.title">
        <h1 class="mx-4">{{ comission.title }}</h1>
        <v-spacer />
        <h2 class="mx-4 mt-2">{{ $t('home.latestComissions.types.' + comission.type) }}</h2>
      </v-sheet>
      <v-row>
        <v-col cols="12" sm="6" class="text-left">
          <p v-if="comission.desctiption" class="pa-4">{{ comission.desctiption }}</p>
          <ul v-if="comission.list" class="pa-4">
            <li class="py-1" v-for="(listItem, ix) in comission.list" :key="ix">
              {{ listItem.content }}: {{ listItem.value }}
            </li>
          </ul>
        </v-col>
        <v-col cols="12" sm="6">
          <v-img :src="comission.src" :lazy-src="comission.lazySrc" contain class="fill-height"></v-img>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';

interface desctiptionList {
  content: string;
  value: string;
}

interface comission {
  src: string;
  lazySrc: string;
  title: string;
  type: string;
  desctiption: string;
  list: desctiptionList[];
  listEn: desctiptionList[];
  listCs: desctiptionList[];
}

export default Vue.extend({
  name: 'ComissiosList',
  data() {
    return {
      message: 'ComissiosList works!',
      comissions: [] as comission[],
    };
  },
  created() {
    axios
      .get('config.json')
      .then(res => {
        this.comissions = res.data.comissions;
        this.comissions.forEach(com => (com.list = this.$i18n.locale === 'en' ? com.listEn : com.listCs));
      })
      .catch(err => console.log(err));
  },
});
</script>

<style scope lang="scss"></style>
