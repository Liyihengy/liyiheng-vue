<template>
  <h3 @click="name = 'NINGHAOWANG'">{{ name }}</h3>
  <div @click="changeName">{{ userName }}</div>
</template>

<script>
import { ref, onMounted } from 'vue';
export default {
  setup() {
    const name = ref('宁皓网');

    const changeName = () => {
      name.value = 'NINGHAOWANG';
    };

    onMounted(() => {
      console.log('mouted');
    });

    return {
      name,
      changeName,
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>
