<template>
  <v-row class="mb-0">
    <v-spacer />
    <v-col cols="12" md="6" class="pa-0">
      <BForm :handleSubmit="sendForm">
        <v-card class="pa-8 mt-0 mb-4">
          <!-- Select form -->
          <FormSelect @selected-form="selectedForm = $event" />

          <!-- Form -->
          <AnimalForm v-if="selectedForm === 'animal'" @form-obj="tableContent = $event" />
          <ProtogenForm v-if="selectedForm === 'protogen'" @form-obj="tableContent = $event" />

          <v-divider />

          <!-- Price quote -->
          <FormTable :tableContent="tableContent" />

          <v-divider v-if="sendMail" />

          <!-- Send -->
          <v-btn v-if="sendMail" block class="submitBtn" color="primary" :disabled="!commisionsAreOpen" type="submit">{{
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
import axios from 'axios';

import Vue from 'vue';
import FormSelect from '../components/PriceQuote/FormSelect.vue';
import AnimalForm from '@/components/PriceQuote/AnimalForm.vue';
import ProtogenForm from '@/components/PriceQuote/ProtogenForm.vue';
import FormTable from '@/components/PriceQuote/FormTable.vue';
import BForm from '../components/BForm.vue';

export default Vue.extend({
  name: 'PriceQuoteView',
  components: { FormSelect, AnimalForm, ProtogenForm, FormTable, BForm },
  data() {
    return {
      sendMail: false,
      selectedForm: '',
      tableContent: {} as any,
      commisionsAreOpen: false as boolean,
    };
  },
  methods: {
    sendForm() {
      const emailTemplate = this.selectedForm === 'animal' ? 'template_bambi_animal' : 'template_bambi_protogen';
      emailjs.send('service_gmail_peta', emailTemplate, this.tableContent.emailVals, 'XOcIETAYuZScgoUa-');
    },
  },
  created() {
    axios
      .get('config.json')
      .then(res => {
        this.commisionsAreOpen = res.data.commisionsAreOpen;
        this.sendMail = res.data.sendMail;
      })
      .catch(err => console.log(err));
  },
});
</script>

<style scope lang="scss">
.submitBtn {
  color: var(--v-gray-darken4) !important;
}
</style>
