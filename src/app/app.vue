<template>
  <h3 @click="name = 'NINGHAOWANG'">{{ name }}</h3>
</template>

<script>
export default {
  setup() {
    const name = '宁皓网';

    return {
      name,
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>
