<template>
  <v-btn-toggle v-model="selectedForm" class="d-flex justify-center mt-5" color="bambiBlue" mandatory>
    <v-btn active-class="active" class="btnGrp" :style="{ minWidth: '30%' }" value="animal">
      <span>{{ $t('priceQuote.forms[0]') }}</span>
      <v-icon right> mdi-paw </v-icon>
    </v-btn>

    <v-btn active-class="active" class="btnGrp" :style="{ minWidth: '30%' }" value="protogen">
      <span>{{ $t('priceQuote.forms[1]') }}</span>
      <v-icon right> mdi-lightning-bolt </v-icon>
    </v-btn>
  </v-btn-toggle>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'FormSelect',
  data() {
    return {
      selectedForm: 'animal',
    };
  },
  watch: {
    selectedForm: {
      handler(newVal): void {
        this.$emit('selected-form', newVal);
      },
      immediate: true,
    },
  },
});
</script>

<style scope lang="scss">
.theme--light.v-btn--active::before,
.theme--dark.v-btn--active::before {
  opacity: 0 !important;
}

.btnGrp {
  span {
    font-size: 20px;
    margin: 0px 5px;
  }
}

.active {
  background-color: var(--v-primary-base) !important;

  i.v-icon {
    animation: scale-animation 1s forwards alternate;
  }
}

@keyframes scale-animation {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1.25);
  }
}
</style>
