<template>
  <nav><app-topnav></app-topnav></nav>
  <header><app-header></app-header></header>
  <main>
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
  <footer><app-footer></app-footer></footer>
</template>
<script>
import AppTopnav from "@/components/app-topnav.vue";
import AppHeader from "@/components/app-header.vue";
import AppFooter from '@/components/app-footer.vue'
export default {
  name: "xtx-layout",
  components: {
    AppTopnav,
    AppHeader,
    AppFooter
  },
  setup() {
    return {};
  },
};
</script>
<style lang='less' scoped>
</style>
