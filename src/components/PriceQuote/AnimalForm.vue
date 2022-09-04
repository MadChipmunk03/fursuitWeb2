<template>
 <v-container>
  <v-card-title class="form-input-title">{{ $t('priceQuote.animal.suitTitile') }}</v-card-title>
  <v-select v-model="formVals.suit.value" :items="formVals.suit.values" solo />

  <v-card-title class="form-input-title">{{ $t('priceQuote.animal.animalTitle') }}</v-card-title>
  <v-select v-model="formVals.animal.value" :items="formVals.animal.values" solo />

  <v-row>
    <v-col cols="12" md="6">
      <v-card-title class="form-input-title">{{ $t('priceQuote.animal.furTitle') }}</v-card-title>
      <v-text-field v-model="formVals.fur.value" type="number" solo />
    </v-col>
    <v-col cols="12" md="6">
      <v-card-title class="form-input-title">{{ $t('priceQuote.animal.fleeceTitle') }}</v-card-title>
      <v-text-field v-model="formVals.fleece.value" type="number" solo />
    </v-col>
  </v-row>

  <v-card-title class="form-input-title">{{ $t('priceQuote.animal.notesTitle') }}</v-card-title>
  <v-textarea :label="$t('priceQuote.animal.notesDesctiption')" solo />
 </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
 name: 'AnimalForm',
 data() {
   return {
      message: 'AnimalForm works!',
      formVals: {
        suit: {
          value: 'Mini parcial',
          values: ['Mini parcial', 'Partial', 'Fullbody'],
        },
        animal: {
          value: this.$t('priceQuote.animal.animalVals[0]'),
          values: this.$t('priceQuote.animal.animalVals'),
        },
        fur: { value: 4 },
        fleece: { value: 2 },
        notes: { value: '' },
      },
   };
 },
});
</script>

<style scope lang="scss">
.form-input-title {
  word-break: break-word;
}
</style>