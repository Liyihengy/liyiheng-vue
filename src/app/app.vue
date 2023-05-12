<template>
  <h3>{{ name }}</h3>
  <textarea v-model="content" placeholder="写点东西吧"></textarea>
  <span> -> Content: {{ content }}</span>
</template>

<script>
export default {
  data() {
    return {
      name: '李依恒',
      content: '',
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>
