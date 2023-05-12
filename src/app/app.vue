<template>
  <h3>{{ name }}</h3>
  <label for="subscription-annual">
    <input
      type="radio"
      id="subscription-annual"
      v-model="subscription"
      value="annual"
    />
    一年
  </label>
  <label for="subscription-mouth">
    <input
      type="radio"
      id="subscription-mouth"
      v-model="subscription"
      value="mouth"
    />
    一月
  </label>
  <span> -> 订阅：{{ subscription }}</span>
</template>

<script>
export default {
  data() {
    return {
      name: '李依恒',
      subscription: 'annual',
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>
