<template>
  <h3>{{ name }}</h3>
  <input type="text" @change="onContent" />
</template>

<script>
export default {
  data() {
    return {
      name: '李依恒',
      category: '',
    };
  },
  methods: {
    onContent(event) {
      console.log(event.target.value);
    },
  },
};
</script>

<style>
@import './styles/app.css';
</style>
