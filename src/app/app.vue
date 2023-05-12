<template>
  <h3>{{ name }}</h3>
  <input type="text" @input="oneServer" />
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
    oneServer(event) {
      console.log(event);
    },
  },
};
</script>

<style>
@import './styles/app.css';
</style>
