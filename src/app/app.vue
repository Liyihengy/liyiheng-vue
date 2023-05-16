<template>
  <h3 @click="name = 'NINGHAOWANG'">{{ name }}</h3>
  <div @click="userName = '李依恒'">{{ userName }}</div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue';
export default {
  setup() {
    const name = ref('宁皓网');

    const user = reactive({
      name: 'LIYIHENG',
    });

    // const { userName } = toRefs(user);

    return {
      name,
      ...toRefs(user),
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>
