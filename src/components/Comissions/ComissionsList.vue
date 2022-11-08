<template>
  <v-container>
    <div v-for="(comission, ix) in comissions" :key="ix" :id="comission.title">
      <v-divider v-if="ix !== 0" class="my-4" />
      <v-sheet color="primary" class="d-flex">
        <h1 class="mx-4">{{ comission.title }}</h1>
        <v-spacer />
        <h2 class="mx-4 mt-2">{{ $t('home.latestComissions.types.' + comission.type) }}</h2>
      </v-sheet>
      <v-row>
        <v-col cols="12" sm="6" class="text-left"
          ><p class="pa-4">{{ comission.desctiption }}</p>
        </v-col>
        <v-col cols="12" sm="6">
          <v-img :src="comission.src" contain class="fill-height"></v-img>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';

interface comission {
  src: string;
  title: string;
  type: string;
  desctiption: string;
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
      .then(res => (this.comissions = res.data.comissions))
      .catch(err => console.log(err));
  },
});
</script>

<style scope lang="scss"></style>
