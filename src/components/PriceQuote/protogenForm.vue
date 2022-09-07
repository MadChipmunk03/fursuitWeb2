<template>
  <v-container>
    <v-card-subtitle v-html="defaultEquipment" />

    <v-row>
      <v-col cols="12" md="6">
        <v-card-title class="break-with-word">{{ $t('priceQuote.protogen.furTitle') }}</v-card-title>
        <ValidationProvider name="fur" rules="minmax:1,8" v-slot="{ errors }">
          <v-text-field v-model="formVals.fur" :error-messages="errors" type="number" solo />
        </ValidationProvider>
      </v-col>
      <v-col cols="12" md="6">
        <v-card-title class="break-with-word">{{ $t('priceQuote.protogen.earsTitle') }}</v-card-title>
        <v-select v-model="formVals.ears.value" :items="formVals.ears.values" solo />
      </v-col>
    </v-row>

    <v-card-title class="break-with-word">{{ $t('priceQuote.protogen.matrixColorTitle') }}</v-card-title>
    <v-select v-model="formVals.matrixColor.value" :items="formVals.matrixColor.values" solo />

    <v-container v-for="checkbox in checkboxes" :key="checkbox.title" class="pa-0">
      <v-row class="pa-0">
        <v-card-title>
          {{ checkbox.title }}
        </v-card-title>
        <v-spacer></v-spacer>
        <v-checkbox v-model="checkbox.value" />
      </v-row>
      <v-row class="pa-0">
        <v-card-subtitle v-if="checkbox?.subtitle" class="break-with-word pt-0 mt-n3">
          ({{ checkbox.subtitle }})
        </v-card-subtitle>
      </v-row>
    </v-container>
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
      defaultEquipment: this.$t('priceQuote.protogen.defaultEquipment'),
      formVals: {
        fur: 4,
        matrixColor: {
          value: this.$t('priceQuote.protogen.matrixColorVals[0]'),
          values: this.$t('priceQuote.protogen.matrixColorVals'),
        },
        ears: {
          value: this.$t('priceQuote.protogen.earsVals[0]'),
          values: this.$t('priceQuote.protogen.earsVals'),
        },
        horns: {
          title: this.$t('priceQuote.protogen.hornsTitle'),
          value: false,
        },
        rgbRings: {
          title: this.$t('priceQuote.protogen.rgbRingsTitle'),
          value: true,
        },
        wifi: {
          title: this.$t('priceQuote.protogen.wifiTitle'),
          subtitle: this.$t('priceQuote.protogen.wifiSubtitle'),
          value: true,
        },
        customEmotion: {
          title: this.$t('priceQuote.protogen.customEmotionTitle'),
          value: false,
        },
      },
    };
  },
  watch: {
    formVals: {
      handler(formVals) {
        const furVal = +formVals.fur;
        const earsVal = formVals.ears.value;
        const hornsValStr = formVals.horns.value ? this.$t('general.yes') : this.$t('general.no');
        const rgbRingsValStr = formVals.rgbRings.value ? this.$t('general.yes') : this.$t('general.no');
        const wifiValStr = formVals.wifi.value ? this.$t('general.yes') : this.$t('general.no');
        const customEmotionValStr = formVals.customEmotion.value ? this.$t('general.yes') : this.$t('general.no');

        const protogenCost = 25_000;
        const furCost = furVal > 4 ? (furVal - 4) * 1000 : 0;
        const earsCost = earsVal === this.$t('priceQuote.protogen.earsVals[0]') ? 0 : 1000;
        const hornsCost = formVals.horns.value ? 200 : 0;
        const rgbRingsCost = formVals.rgbRings.value ? 200 : 0;
        const wifiCost = formVals.wifi.value ? 0 : -1000;
        const customEmotionCost = formVals.customEmotion.value ? 500 : 0;

        const currency = this.$t('priceQuote.priceQuote.currencyCzk');

        const formObj = {
          tableItems: [
            { item: `${this.$t('priceQuote.protogen.protogenTable')}`, price: `${protogenCost} ${currency}` },
            { item: `${this.$t('priceQuote.protogen.furTable')} (${furVal})`, price: `${furCost} ${currency}` },
            { item: `${this.$t('priceQuote.protogen.earsTable')} (${earsVal})`, price: `${earsCost} ${currency}` },
            {
              item: `${this.$t('priceQuote.protogen.hornsTable')} (${hornsValStr})`,
              price: `${hornsCost} ${currency}`,
            },
            {
              item: `${this.$t('priceQuote.protogen.rgbRingsTable')} (${rgbRingsValStr})`,
              price: `${rgbRingsCost} ${currency}`,
            },
            { item: `${this.$t('priceQuote.protogen.wifiTable')} (${wifiValStr})`, price: `${wifiCost} ${currency}` },
            {
              item: `${this.$t('priceQuote.protogen.customEmotionTable')} (${customEmotionValStr})`,
              price: `${customEmotionCost} ${currency}`,
            },
          ],
          totalCost: protogenCost + furCost + earsCost + hornsCost + rgbRingsCost + wifiCost + customEmotionCost,
          emailVals: {},
        };
        this.$emit('form-obj', formObj);
      },
      immediate: true,
      deep: true,
    },
  },
  computed: {
    checkboxes(): Array<any> {
      return (({ horns, rgbRings, wifi, customEmotion }) => [horns, rgbRings, wifi, customEmotion])(this.formVals);
    },
  },
});
</script>

<style scope lang="scss">
.break-with-word {
  word-break: break-word;
}
</style>
