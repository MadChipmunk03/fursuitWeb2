<template>
 <h1>{{ message }}</h1>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
 name: 'SocialMediaView',
 data() {
   return {
     message: 'SocialMediaView works!',
   };
 },
});
</script>

<style scope lang="scss"></style>