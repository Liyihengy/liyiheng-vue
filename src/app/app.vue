<template>
  <h3>{{ name }}</h3>
  <div>{{ errorMessage }}</div>
  <div v-for="post in posts" :key="post.id">
    {{ post.title }} - {{ post.user.name }} - {{ post.content }}
  </div>
</template>

<script>
import { apiHttpClient } from './app.service';

export default {
  data() {
    return {
      name: '宁皓网',
      posts: [],
      errorMessage: '',
    };
  },

  async created() {
    try {
      const response = await apiHttpClient.get('/posts');

      console.log(apiHttpClient.defaults);

      this.posts = response.data;
    } catch (error) {
      this.errorMessage = error.message;
    }
  },
};
</script>

<style>
@import './styles/app.css';
</style>
