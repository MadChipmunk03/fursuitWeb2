<template>
 <h1>{{ message }}</h1>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
 name: 'MerchView',
 data() {
   return {
     message: 'MerchView works!',
   };
 },
});
</script>

<style scope lang="scss"></style>