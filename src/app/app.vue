<template>
  <h3>{{ name }}</h3>
  <select v-model="category">
    <option value="">》》 选择开发类型 《《</option>
    <option value="development">》》 游戏开发 《《</option>
    <option value="game">》》 网页开发 《《</option>
  </select>
  <span>-> Selece：{{ category }}</span>
</template>

<script>
export default {
  data() {
    return {
      name: '李依恒',
      category: '',
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>
