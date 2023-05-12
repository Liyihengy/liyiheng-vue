<template>
  <h3>{{ name }}</h3>
  <input type="text" @keyup.enter="keys" />
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
    keys(event) {
      // if (event.key === 'Enter') {
      //   console.log('回车！！');
      // }
      console.log('回车！！');
    },
  },
};
</script>

<style>
@import './styles/app.css';
</style>
