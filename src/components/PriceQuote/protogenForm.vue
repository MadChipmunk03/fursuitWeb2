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

    <v-card-title class="break-with-word">{{ $t('priceQuote.protogen.matrixTitle') }}</v-card-title>
    <v-select v-model="formVals.matrix.value" :items="formVals.matrix.values" solo />

    <!-- list with checkboxes -->
    <v-container v-for="(checkbox, ix) in checkboxes" :key="ix" class="pt-0">
      <v-row class="pa-0">
        <v-card-title>
          {{ checkbox.title }}
          <v-tooltip v-if="checkbox?.preview" top>
            <template v-slot:activator="{ on, attrs }">
              <sup>
                <v-icon color="grey darken-4" left size="20" v-bind="attrs" v-on="on"> mdi-information-variant </v-icon>
              </sup>
            </template>
            <v-row class="py-5 px-0">
              <v-col>
                <v-img
                  :src="require('@/assets/commission/' + checkbox.preview.img)"
                  :alt="checkbox.preview.img"
                  contain
                  max-height="150"
                  max-width="150"
                ></v-img>
              </v-col>
              <v-col>
                <h3>{{ checkbox.title }}</h3>
                <p class="break-with-word preview-description">{{ checkbox.preview.description }}</p>
              </v-col>
            </v-row>
          </v-tooltip>
        </v-card-title>
        <v-spacer></v-spacer>
        <v-checkbox v-model="checkbox.value" />
      </v-row>
      <v-row class="pt-0">
        <v-card-subtitle v-if="checkbox?.subtitle" class="break-with-word pt-0 mt-n3">
          ({{ checkbox.subtitle }})
        </v-card-subtitle>
      </v-row>
    </v-container>

    <v-card-title v-if="sendMail" class="break-with-word">{{ $t('priceQuote.protogen.notesTitle') }}</v-card-title>
    <v-textarea v-if="sendMail" v-model="formVals.notes" :label="$t('priceQuote.protogen.notesLabel')" solo />

    <v-card-title v-if="sendMail" class="break-with-word">Email</v-card-title>
    <ValidationProvider v-if="sendMail" name="email" rules="required|email" v-slot="{ errors }">
      <v-text-field
        v-model="formVals.email"
        :error-messages="errors"
        :label="$t('priceQuote.protogen.emailLabel')"
        solo
      />
    </ValidationProvider>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import { ValidationProvider } from 'vee-validate';

export default Vue.extend({
  name: 'ProtogenForm',
  components: { ValidationProvider },
  data() {
    return {
      sendMail: false,
      defaultEquipment: this.$t('priceQuote.protogen.defaultEquipment'),
      formVals: {
        fur: 4,
        ears: {
          value: this.$t('priceQuote.protogen.earsVals[0]'),
          values: this.$t('priceQuote.protogen.earsVals'),
        },
        matrix: {
          value: this.$t('priceQuote.protogen.matrixVals[0]'),
          values: this.$t('priceQuote.protogen.matrixVals'),
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
          preview: {
            img: 'wifiPreview.png',
            description: this.$t('priceQuote.protogen.wifiSubtitle'),
          },
        },
        customEmotion: {
          title: this.$t('priceQuote.protogen.customEmotionTitle'),
          value: false,
        },
        notes: '',
        email: '',
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
        const totalCost = protogenCost + furCost + earsCost + hornsCost + rgbRingsCost + wifiCost + customEmotionCost;

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
          totalCost: totalCost,
          emailVals: {
            protogenCost: protogenCost,
            fur: furVal,
            furCost: furCost,
            ears: formVals.ears.value,
            earsCost: earsCost,
            matrix: formVals.matrix.value,
            horns: hornsValStr,
            hornsCost: hornsCost,
            rgbRings: rgbRingsValStr,
            rgbRingsCost: rgbRingsCost,
            wifi: wifiValStr,
            wifiCost: wifiCost,
            customEmotion: customEmotionValStr,
            customEmotionCost: customEmotionCost,
            notes: formVals.notes,
            from: formVals.email,
            totalCost: totalCost,
          },
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
  created() {
    axios
      .get('config.json')
      .then(res => {
        this.sendMail = res.data.sendMail;
      })
      .catch(err => console.log(err));
  },
});
</script>

<style scope lang="scss">
.break-with-word {
  word-break: break-word;
}
.preview-description {
  width: 150px;
}
</style>
