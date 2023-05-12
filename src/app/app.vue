<template>
  <h3>{{ name }}</h3>
  <input type="checkbox" id="checked" v-model="checked" />
  <label for="checked"> -> Checked：{{ checked }}</label>
</template>

<script>
export default {
  data() {
    return {
      name: '李依恒',
      checked: true,
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>
