<template>
  <h3>
    <router-link :to="{ name: 'postShow', params: { postId: item.id } }"
      >{{ item.title }}
    </router-link>
    -
    {{ item.user.name }}
  </h3>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    item: Object,
  },
});
</script>
