<template>
  <validation-observer v-slot="v" ref="formValidator">
    <v-form @submit.prevent="v.handleSubmit(onSubmit)">
      <slot v-bind="v"></slot>
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
