<template>
  <v-container>
    <v-card-title class="form-input-title">{{ $t('priceQuote.animal.suitTitile') }}</v-card-title>
    <v-select v-model="formVals.suit.value" :items="formVals.suit.values" solo />

    <v-card-title class="form-input-title">{{ $t('priceQuote.animal.animalTitle') }}</v-card-title>
    <v-select v-model="formVals.animal.value" :items="formVals.animal.values" solo />

    <v-row>
      <v-col cols="12" md="6">
        <v-card-title class="form-input-title">{{ $t('priceQuote.animal.furTitle') }}</v-card-title>
        <v-text-field v-model="formVals.fur" type="number" solo />
      </v-col>
      <v-col cols="12" md="6">
        <v-card-title class="form-input-title">{{ $t('priceQuote.animal.fleeceTitle') }}</v-card-title>
        <v-text-field v-model="formVals.fleece" type="number" solo />
      </v-col>
    </v-row>

    <v-card-title class="form-input-title">{{ $t('priceQuote.animal.notesTitle') }}</v-card-title>
    <v-textarea v-mode="formVals.notes" :label="$t('priceQuote.animal.notesLabel')" solo />

    <v-card-title class="form-input-title">Email</v-card-title>
    <v-text-field :label="$t('priceQuote.animal.emailLabel')" solo />
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
          value: this.$t('priceQuote.animal.suitVals[0]'),
          values: this.$t('priceQuote.animal.suitVals'),
        },
        animal: {
          value: this.$t('priceQuote.animal.animalVals[0]'),
          values: this.$t('priceQuote.animal.animalVals'),
        },
        fur: 4,
        fleece: 2,
        notes: '',
        email: '',
      },
    };
  },
  watch: {
    formVals: {
      handler(formVals) {
        const suitVal = formVals.suit.value;
        const furVal = +formVals.fur;
        const fleeceVal = +formVals.fleece;

        let suitCost = 0;
        let furCost = furVal > 4 ? (furVal - 4) * 1000 : 0;
        let fleeceCost = fleeceVal > 2 ? (fleeceVal - 2) * 250 : 0;

        switch (suitVal) {
          //Mini parcial
          case formVals.suit.values[0]:
            suitCost = 16_500;
            break;
          //Parcial
          case formVals.suit.values[1]:
            suitCost = 24_000;
            furCost = furCost * 1.5;
            fleeceCost = (fleeceCost / 250) * 300;
            break;
          //Fullbody
          case formVals.suit.values[2]:
            suitCost = 50_000;
            furCost = furCost * 2;
            fleeceCost = (fleeceCost / 250) * 600;
            break;
        }

        const currency = this.$t('priceQuote.priceQuote.currencyCzk');

        const formObj = {
          tableHeaders: [
            { text: 'Item', value: 'item' },
            { text: 'Price', value: 'price' },
          ],
          tableItems: [
            { item: `${this.$t('priceQuote.animal.suitTable')} (${suitVal})`, price: `${suitCost} ${currency}` },
            { item: `${this.$t('priceQuote.animal.furTable')} (${furVal})`, price: `${furCost} ${currency}` },
            { item: `${this.$t('priceQuote.animal.fleeceTable')} (${fleeceVal})`, price: `${fleeceCost} ${currency}` },
          ],
          totalCost: suitCost + furCost + fleeceCost,
          rawVals: formVals,
        };
        this.$emit('form-obj', formObj);
      },
      immediate: true,
      deep: true,
    },
  },
});
</script>

<style scope lang="scss">
.form-input-title {
  word-break: break-word;
}
</style>
