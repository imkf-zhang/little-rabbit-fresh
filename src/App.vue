<template>
  <div id="container">
    <!-- 1、使用A模块的state数据 -->
    <p>{{ $store.state.moduleA.username }}</p>
    <!-- 2、使用A模块的getters数据 -->
    <p>{{ $store.getters.newName }}</p>

    <!-- 1、使用B模块的state数据 -->
    <p>{{ $store.state.moduleB.username }}</p>
    <!-- 2、使用B模块的getters数据 $store.getters['模块名/计算属性']-->
    <p>{{ $store.getters["moduleB/newName"] }}</p>
    <button @click="mutationsFn">mutationsFn</button>
    <button @click="actionsFn">actionsFn</button>
    <p>{{ $store.state.moduleB.age }}</p>
  </div>
</template>
<script>
import { useStore } from "vuex";
export default {
  name: "App",
  setup() {
    // userStore可以拿到vuex仓库实例
    const store = useStore();
    // 1、使用moduleA模块state的数据
    console.log(store);
    console.log(store.state.moduleA.username); // moduleA
    // 2、使用moduleA模块getters的数据
    console.log(store.getters.newName); // moduleA!!!!

    // 1、使用moduleB模块getters的数据
    console.log(store.getters["moduleB/newName"]); // moduleB???

    const mutationsFn = () => {
      // 提交B模块的更改
      store.commit('moduleB/updateName')
    };
    const actionsFn = () => {
      // 传参用法
      store.dispatch("moduleB/updateName", 6)
    };
    return {
      mutationsFn,
      actionsFn,
    };
  },
};
</script>
<style lang='less' scoped>
</style>
