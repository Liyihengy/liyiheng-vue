<template>
  <h3 @click="name = 'NINGHAOWANG'">{{ name }}</h3>
  <div @click="changeName">{{ userName }}</div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
export default {
  setup() {
    //数据
    const name = ref('宁皓网');

    //方法
    const changeName = () => {
      name.value = 'NINGHAOWANG';
    };

    //生命周期
    onMounted(() => {
      console.log('mouted');
    });

    //监视数据
    watch(name, (newName, oldName) => {
      console.log(newName, oldName);
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
