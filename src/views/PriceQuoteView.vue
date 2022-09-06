<template>
  <v-row>
    <v-spacer />
    <v-col cols="12" md="6" class="pa-0">
      <BForm :handleSubmit="sendForm">
        <v-card class="pa-8">
          <!-- Select form -->
          <FormSelect @selected-form="selectedForm = $event" />

          <!-- Form -->
          <AnimalForm v-if="selectedForm === 'animal'" @form-obj="tableContent = $event" />
          <ProtogenForm v-if="selectedForm === 'protogen'" @form-obj="tableContent = $event"/>

          <v-divider />

          <!-- Price quote -->
          <FormTable :tableContent="tableContent" />

          <v-divider />

          <!-- Send -->
          <v-btn block class="submitBtn" color="primary" type="submit">{{ $t('priceQuote.sendBtn') }}</v-btn>
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

export default Vue.extend({
  name: 'PriceQuoteView',
  components: { FormSelect, AnimalForm, ProtogenForm, FormTable, BForm },
  data() {
    return {
      selectedForm: 'animal',
      tableContent: {} as any,
    };
  },
  methods: {
    sendForm() {
      emailjs.send('service_gmail_peta', 'template_bambi_animal', this.tableContent.emailVals, 'XOcIETAYuZScgoUa-');
      console.log('☣', this.tableContent.emailVals);
      console.log('sending form...');
    },
  },
});
</script>

<style scope lang="scss">
.submitBtn {
  color: var(--v-gray-darken4) !important;
}
</style>
