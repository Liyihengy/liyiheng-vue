<template>
  <h3>{{ name }}</h3>
  <label for="tag-1">
    <input type="checkbox" id="tag-1" v-model="tags" value="大明湖" />
    大明湖
  </label>
  <label for="tag-2">
    <input type="checkbox" id="tag-2" v-model="tags" value="黑虎泉" />
    黑虎泉
  </label>
  <label for="tag-3">
    <input type="checkbox" id="tag-3" v-model="tags" value="趵突泉" />
    趵突泉
  </label>
  <span>-> Tags：{{ tags }}</span>
</template>

<script>
export default {
  data() {
    return {
      name: '李依恒',
      tags: [],
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>
