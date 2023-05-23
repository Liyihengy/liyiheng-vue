<template>
  <h3>
    <router-link to="/">{{ name }}</router-link>
  </h3>
  <router-view></router-view>
</template>

<script>
import { socket } from './app.service';

export default {
  data() {
    return {
      name: '宁皓网',
    };
  },

  created() {
    console.log(this.$store.state);

    //监听服务端事件
    socket.on('connect', () => {
      console.log('connect', socket.id);

      socket.emit('greet', `你好服务器，我是${socket.id}`);
    });
  },
};
</script>

<style>
@import './styles/app.css';
</style>
