<template>
  <!-- 可以发现，其实这种列表导航形式的多用用ul  li标签，是有所用的，没有加载出来的时候页面显示不至于太离谱 -->
  <ul class="navs">
    <li class="home"><router-link to="/">首页</router-link></li>
    <li v-for="item in list" :key="item.id">
      <router-link to="/">{{item.name}}</router-link>
      <div class="layer">
        <ul>
          <li v-for=" sub in item.children" :key="sub.id">
            <router-link to="/">
              <img
                :src="sub.picture"
                alt=""
              />
              <p>{{sub.name}}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "AppHeaderNav",
  setup() {
    const store = useStore();
    const list = computed(() => {
      return store.state.cartegory.list;
    });
    return { list };
  },
};
</script>
<style lang='less' scoped>
.navs {
  width: 820px;
  display: flex;
  justify-content: space-around;
  padding-left: 40px;
  position: relative;
  > li {
    margin-right: 40px;
    width: 38px;
    text-align: center;
    > a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
    }
    &:hover {
      > a {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
      // 显示二级类名
      > .layer {
        height: 132px;
        opacity: 1;
      }
    }
  }
}
.layer {
  width: 1240px;
  background-color: #fff;
  position: absolute;
  left: -200px;
  top: 56px;
  height: 0;
  overflow: hidden;
  opacity: 0;
  box-shadow: 0 0 5px #ccc;
  transition: all 0.2s 0.1s;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 70px;
    align-items: center;
    height: 132px;
    li {
      width: 110px;
      text-align: center;
      img {
        width: 60px;
        height: 60px;
      }
      p {
        padding-top: 10px;
      }
      &:hover {
        p {
          color: @xtxColor;
        }
      }
    }
  }
}
</style>
