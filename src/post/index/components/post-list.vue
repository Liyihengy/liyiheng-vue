<template>
  <PostListItem />
</template>

<script>
import { defineComponent } from 'vue';
import PostListItem from './post-item.vue';

export default defineComponent({
  components: {
    PostListItem,
  },
});
</script>
