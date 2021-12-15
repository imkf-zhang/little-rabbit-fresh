<template>
  <div id="container">
    你好
    <p>{{$store.state.user.profile.mobile}}</p>
    <button @click="mutationsFn">测试用户信息</button>
  </div>
</template>
<script>
import { useStore } from 'vuex'
export default {
  name: "",
  setup() {
    const STORE = useStore();
    const mutationsFn = () => {
      STORE.commit('user/setUser', 15656)
    }
    return {
      mutationsFn
    };
  },
};
</script>
<style lang='less' scoped>
</style>
