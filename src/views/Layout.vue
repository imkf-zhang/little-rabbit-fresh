<template>
  <nav><app-topnav></app-topnav></nav>
  <app-header-sticky></app-header-sticky>
  <header><app-header></app-header></header>
  <main style="height: 500px">
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
  <footer><app-footer></app-footer></footer>
</template>
<script>
import { useStore } from "vuex";
import AppTopnav from "@/components/app-topnav.vue";
import AppHeader from "@/components/app-header.vue";
import AppFooter from "@/components/app-footer.vue";
import AppHeaderSticky from '@/components/app-header-sticky.vue'
export default {
  name: "xtx-layout",
  components: {
    AppTopnav,
    AppHeader,
    AppFooter,
    AppHeaderSticky
  },
  setup() {
    const store = useStore();
    // 在这个路由页面我就去发请求拿数据，那么在各个组件里是不是就可以是用stroe中的数据了
    store.dispatch("cartegory/getList");
    return {};
  },
};
</script>
<style lang='less' scoped>
</style>
