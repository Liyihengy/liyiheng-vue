<template>
  <h3>{{ name }}</h3>
  <input type="text" v-model.trim="content" @change="onContent" />
  <span>-> Content {{ content }}</span>
</template>

<script>
export default {
  data() {
    return {
      name: '李依恒',
      content: '天地玄黄',
    };
  },
  methods: {
    onContent() {
      console.log(this.content, this.content.length);
    },
  },
};
</script>

<style>
@import './styles/app.css';
</style>
