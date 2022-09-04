<template>
  <v-row>
    <v-spacer />
    <v-col cols="12" md="6" class="pa-0">
      <v-card class="pa-8">
        <!-- Select form -->
        <FormSelect @selected-form="selectedForm = $event" />

        <!-- Form -->
        <AnimalForm v-if="selectedForm === 'animal'" @form-obj="tableContent = $event" />

        <v-divider />

        <!-- Price quote -->
        <FormTable :tableContent="tableContent" />

        <v-divider />

        <!-- Send -->
        <FormSend />
      </v-card>
    </v-col>
    <v-spacer />
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import FormSelect from '../components/PriceQuote/FormSelect.vue';
import AnimalForm from '@/components/PriceQuote/AnimalForm.vue';
import FormTable from '@/components/PriceQuote/FormTable.vue';
import FormSend from '../components/PriceQuote/FormSend.vue';

export default Vue.extend({
  name: 'PriceQuoteView',
  components: { FormSelect, AnimalForm, FormTable, FormSend },
  data() {
    return {
      selectedForm: 'animal',
      tableContent: {},
    };
  },
});
</script>

<style scope lang="scss"></style>
