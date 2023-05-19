<template>
  <h3>{{ item.title }} - {{ item.user.name }}</h3>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    item: Object,
  },
});
</script>
