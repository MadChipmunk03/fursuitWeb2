<template>
  <v-row>
    <v-spacer />
    <v-col cols="12" md="6" class="pa-0">
      <v-card class="pa-8">
        <!-- Select form -->
        <FormSelect v-on:selected-form="selectedForm = $event" />

        <!-- Form -->
        <AnimalForm v-if="selectedForm === 'animal'" />

        <v-divider />

        <!-- Price quote -->
        <v-card-title>{{ $t('priceQuote.priceQuote') }}</v-card-title>

        <!-- Send -->
      </v-card>
    </v-col>
    <v-spacer />
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import FormSelect from '../components/PriceQuote/FormSelect.vue';
import AnimalForm from '@/components/PriceQuote/AnimalForm.vue';

export default Vue.extend({
  name: 'PriceQuoteView',
  components: { FormSelect, AnimalForm },
  data() {
    return {
      selectedForm: 'animal',
    };
  },
});
</script>

<style scope lang="scss"></style>
