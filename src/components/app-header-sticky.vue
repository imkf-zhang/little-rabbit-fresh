<template>
  <div class="app-header-sticky" :class="{ show: y > 78 }">
    <div class="container" v-show="y > 78">
      <router-link class="logo" to="/" />
      <!-- 有一个bug: 鼠标移入的话往上走移出，二级导航并未关闭 -->
      <app-header-nav></app-header-nav>
      <div class="right">
        <router-link to="/">品牌</router-link>
        <router-link to="/">专题</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import AppHeaderNav from "./app-header-nav";
export default {
  name: "AppHeaderSticky",
  components: { AppHeaderNav },
  setup(props) {
    const y = ref(0);
    let timer = null;
    const getScrollTop = () => {
      if (timer) {
        return;
      }
      timer = setTimeout(() => {
        const scrollTop = document.documentElement.scrollTop;
        y.value = scrollTop;
        timer = null;
      }, 50);
    };
    onMounted(() => {
      window.addEventListener("scroll", getScrollTop);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("scroll", getScrollTop);
    });
    return {
      y,
    };
  },
};
</script>

<style scoped lang='less'>
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  transform: translateY(-100%);
  opacity: 0;
  &.show {
    transform: translateY(0);
    // transform: none;
    opacity: 1;
    transition: all 0.5s ease-out;
  }
  .container {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 200px;
    height: 80px;
    background: url(../assets/images/logo.png) no-repeat right 2px;
    background-size: 160px auto;
  }
  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid @xtxColor;
    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;
      &:hover {
        color: @xtxColor;
      }
    }
  }
}
</style>
