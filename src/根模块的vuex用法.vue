<template>
  <!-- vue2.0需要根元素，vue3.0可以是代码片段 fragment -->
  <div>
    App
    <!-- 1、使用根模块state的数据 -->
    <h1>{{ $store.state.username }}</h1>
    <!-- 2、使用根模块getters的数据 -->
    <h1>{{ $store.getters.newName }}</h1>
    <h1>{{ $store.getters["newName"] }}</h1>
    <button @click="mutationsFn">按钮</button>
    <h1>{{ $store.state.age }}</h1>
    <button @click="actionsFn">改变年龄</button>
  </div>
  <p>p</p>
</template>
<script>
import { useStore } from "vuex";
export default {
  name: "App",
  setup () {
    // userStore可以拿到vuex仓库实例
    const store = useStore();
    // 1、使用根模块state的数据
    console.log(store);
    console.log(store.state.username);
    // 2、使用根模块getters的数据
    console.log(store.getters.newName);
    // 3、提交根模块mutations方法
    const mutationsFn = () => {
      store.commit("updateName");
    };
    // 4、调用根模块的actions函数
    const actionsFn = () => {
      store.dispatch('updateName')
    }
    return {
      mutationsFn,
      actionsFn
    }
  },
};
</script>
<style lang="less">
</style>
