<template>
  <validation-observer v-slot="v" ref="formValidator"  class="pa-0">
    <v-form @submit.prevent="v.handleSubmit(onSubmit)" class="pa-0">
      <slot v-bind="v"  class="pa-0"></slot>
    </v-form>
  </validation-observer>
</template>

<script>
import { ValidationObserver } from 'vee-validate';
export default {
  name: 'SForm',
  components: { ValidationObserver },
  props: {
    handleSubmit: Function,
  },
  methods: {
    onSubmit() {
      if (this.handleSubmit) this.handleSubmit();
    },
    reset() {
      this.$refs.formValidator.reset();
    },
  },
};
</script>
