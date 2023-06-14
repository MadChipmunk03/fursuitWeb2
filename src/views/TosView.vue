<template>
    <v-row class="mb-0 mx-0">
    <v-spacer />
    <v-col cols="12" md="6" class="pa-0">
      <v-card class="pa-8 mt-0 mb-4">
        
        <h2 class="mb-4">{{ $t('tos.greetingsTitle') }}</h2>
        <p>{{ $t('tos.greetingsText') }}</p>
        <h2 class="mb-4">{{ $t('tos.pricingTitle') }}</h2>
        <p>{{ $t('tos.pricingText') }}</p>

        <h1 class="mb-4">{{ $t('tos.title') }}</h1>
        <h2 class="mb-4">{{ $t('tos.generalTitle') }}</h2>
        <ul class="mb-4">
          <li v-for="bullet in $t('tos.generalBullets')" :key="bullet">
            {{ bullet }}
          </li>
        </ul>
        <h2 class="mb-4">{{ $t('tos.paymentsTitle') }}</h2>
        <ul class="mb-4">
          <li v-for="bullet in $t('tos.paymentsBullets')" :key="bullet">
            {{ bullet }}
          </li>
        </ul>
        <h2 class="mb-4">{{ $t('tos.shipmentTitle') }}</h2>
        <ul class="mb-4">
          <li v-for="bullet in $t('tos.shipmentBullets')" :key="bullet">
            {{ bullet }}
          </li>
        </ul>

        <p>{{ $t('tos.footerText') }}</p>
      </v-card>
    </v-col>
    <v-spacer />
  </v-row>
  </template>
  
  <script lang="ts">
  import Vue from 'vue';
  
  export default Vue.extend({
    name: 'TosView',
  });
  </script>
  
  <style scope lang="scss"></style>
  