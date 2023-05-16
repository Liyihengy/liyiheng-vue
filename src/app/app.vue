<template>
  <h3 @click="name = 'NINGHAOWANG'">{{ name }}</h3>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const name = ref('宁皓网');

    return {
      name,
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>
