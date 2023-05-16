<template>
  <h3>{{ name }}</h3>
</template>

<script>
export default {
  data() {
    return {
      name: '李依恒',
    };
  },
  created() {
    const user = {
      name: '宁皓网',
    };

    const handler = {
      get(target, property) {
        return target[property];
      },
      //target是对象，property是属性名称，value是具体的对象属性
      set(target, property, value) {
        if (property === 'name') {
          if (value.length > 10) {
            throw new Error('名字太长了');
          }
        }

        //默认行为
        return Reflect.set(target, property, value);
      },
    };

    const userProxy = new Proxy(user, handler);

    try {
      userProxy.name = 'NINGHAO';
    } catch (error) {
      console.log('错误：', error.message);
    }

    console.log(userProxy.name);
  },
};
</script>

<style>
@import './styles/app.css';
</style>
