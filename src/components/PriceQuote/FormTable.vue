<template>
  <v-container>
    <v-card-title>{{ $t('priceQuote.priceQuote.title') }}</v-card-title>
    <v-data-table
      class="elevation-2"
      :headers="tableHeaders"
      hide-default-header
      hide-default-footer
      :items="tableContent.tableItems"
    ></v-data-table>
    <v-card-subtitle class="font-weight-bold text-right">
      {{ $t('priceQuote.priceQuote.total') }}: {{ tableContent.totalCost }}
      {{ $t('priceQuote.priceQuote.currencyCzk') }}
    </v-card-subtitle>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'FormTable',
  props: {
    tableContent: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      message: 'FormTable works!',
      tableHeaders: [
        { text: 'Item', value: 'item' },
        { text: 'Price', value: 'price', align: 'right' },
      ],
    };
  },
});
</script>

<style scope lang="scss"></style>
