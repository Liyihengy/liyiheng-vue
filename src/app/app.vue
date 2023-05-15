<template>
  <h3 @click="onName">{{ name }} <span v-if="loading">加载中...</span></h3>
  {{ currentUser }}
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      name: 'name',
      currentUser: 'user/currentUser',
    }),
    ...mapState(['loading', 'user']),
  },

  created() {
    // this.$store.dispatch('getName');
    this.oneAa();
    this.getCurrentUser();
  },

  methods: {
    ...mapMutations(['setName']),
    ...mapActions({
      oneAa: 'getName',
      getCurrentUser: 'user/getCurrentUser',
    }),

    onName() {
      if (this.$store.state.name === '宁皓网') {
        // this.$store.commit('setName', 'NINGHAO');
        this.setName('NINGHAOWANG');
      } else {
        // this.$store.commit('setName', '宁皓网');
        this.setName('宁皓网');
      }
    },
  },
};
</script>

<style>
@import './styles/app.css';
</style>
