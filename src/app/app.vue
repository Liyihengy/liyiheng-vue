<template>
  <h3 @click="name = 'NINGHAOWANG'">{{ name }}</h3>
  <div @click="user.name = '李依恒'">{{ user.name }}</div>
</template>

<script>
import { ref, reactive } from 'vue';
export default {
  setup() {
    const name = ref('宁皓网');

    const user = reactive({
      name: 'LIYIHENG',
    });

    return {
      name,
      user,
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>
