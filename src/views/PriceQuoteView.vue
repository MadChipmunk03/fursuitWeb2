<template>
  <v-row class="pb-8">
    <v-spacer />
    <v-col cols="12" md="6" class="pa-0">
      <BForm :handleSubmit="sendForm">
        <v-card class="pa-8 mt-0">
          <!-- Slide show -->
          <slideShow />

          <!-- Select form -->
          <FormSelect @selected-form="selectedForm = $event" />

          <!-- Form -->
          <AnimalForm v-if="selectedForm === 'animal'" @form-obj="tableContent = $event" />
          <ProtogenForm v-if="selectedForm === 'protogen'" @form-obj="tableContent = $event" />

          <v-divider />

          <!-- Price quote -->
          <FormTable :tableContent="tableContent" />

          <v-divider />

          <!-- Send -->
          <v-btn block class="submitBtn" color="primary" :disabled="!openForBusiness" type="submit">{{
            $t('priceQuote.sendBtn')
          }}</v-btn>
        </v-card>
      </BForm>
    </v-col>
    <v-spacer />
  </v-row>
</template>

<script lang="ts">
import emailjs from '@emailjs/browser';

import Vue from 'vue';
import FormSelect from '../components/PriceQuote/FormSelect.vue';
import AnimalForm from '@/components/PriceQuote/AnimalForm.vue';
import ProtogenForm from '@/components/PriceQuote/protogenForm.vue';
import FormTable from '@/components/PriceQuote/FormTable.vue';
import BForm from '../components/BForm.vue';
import SlideShow from '@/components/PriceQuote/SlideShow.vue';

export default Vue.extend({
  name: 'PriceQuoteView',
  components: { FormSelect, AnimalForm, ProtogenForm, FormTable, BForm, SlideShow },
  data() {
    return {
      selectedForm: '',
      tableContent: {} as any,
      openForBusiness: false as boolean,
    };
  },
  methods: {
    sendForm() {
      const emailTemplate = this.selectedForm === 'animal' ? 'template_bambi_animal' : 'template_bambi_protogen';
      emailjs.send('service_gmail_peta', emailTemplate, this.tableContent.emailVals, 'XOcIETAYuZScgoUa-');
    },
  },
  // mounted() {
  //   if (!this.openForBusiness) alert(this.$t('priceQuote.notOpenForBusiness'));
  // },
});
</script>

<style scope lang="scss">
.submitBtn {
  color: var(--v-gray-darken4) !important;
}
</style>
