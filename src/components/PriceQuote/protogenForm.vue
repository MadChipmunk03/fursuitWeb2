<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-card-title class="form-input-title">{{ $t('priceQuote.protogen.furTitle') }}</v-card-title>
        <ValidationProvider name="fur" rules="minmax:1,8" v-slot="{ errors }">
          <v-text-field v-model="formVals.fur" :error-messages="errors" type="number" solo />
        </ValidationProvider>
      </v-col>
      <v-col cols="12" md="6">
        <v-card-title class="form-input-title">{{ $t('priceQuote.protogen.numOfEarsTitle') }}</v-card-title>
        <v-select v-model="formVals.numOfEars.value" :items="formVals.numOfEars.values" solo />
      </v-col>
    </v-row>

    <v-card-title class="form-input-title">{{ $t('priceQuote.protogen.matrixColorTitle') }}</v-card-title>
    <v-select v-model="formVals.matrixColor.value" :items="formVals.matrixColor.values" solo />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { ValidationProvider } from 'vee-validate';

export default Vue.extend({
  name: 'protogenForm',
  components: { ValidationProvider },
  data() {
    return {
      formVals: {
        fur: 4,
        matrixColor: {
          value: this.$t('priceQuote.protogen.matrixColorVals[0]'),
          values: this.$t('priceQuote.protogen.matrixColorVals'),
        },
        numOfEars: {
          value: this.$t('priceQuote.protogen.numOfEarsVals[0]'),
          values: this.$t('priceQuote.protogen.numOfEarsVals'),
        },
      },
    };
  },
});
</script>

<style scope lang="scss"></style>
