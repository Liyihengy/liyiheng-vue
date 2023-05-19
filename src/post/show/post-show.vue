<template>
  <div v-if="showPost">
    <h1>{{ post.id }}</h1>
    <div>{{ post.content }} - {{ post.user.name }}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    postId: String,
  },

  created() {
    this.getPostById(this.postId);
  },

  computed: {
    ...mapGetters({
      loading: 'post/show/loading',
      post: 'post/show/post',
    }),

    showPost() {
      return !this.loading && this.post;
    },
  },

  methods: {
    ...mapActions({
      getPostById: 'post/show/getPostById',
    }),
  },
});
</script>
