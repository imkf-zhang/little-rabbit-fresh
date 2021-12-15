import { createStore } from "vuex";
// A模块
const moduleA = {
  state: {
    username: "moduleA",
  },
  getters: {
    newName (state) {
      return state.username + "!!!!";
    },
  },
  mutations: {
    updateName (state) {
      state.username = "moduleAAAA";
    },
  },
};
// B模块
const moduleB = {
  namespaced: true,
  state: {
    username: "moduleB",
    age: 2
  },
  getters: {
    newName (state) {
      return state.username + "???";
    },
  },
  mutations: {
    // 更改数据函数
    updateName (state) {
      state.username = 'ls'
    },
    updateAge (state, playLoad) {
      console.log("playLoad", playLoad)
      state.age += playLoad
    }
  },
  actions: {
    // 请求数据函数
    updateName (ctx, count) {
      console.log('触发了')
      // 发请求
      setTimeout(() => {
        ctx.commit('updateAge', count)
      }, 1000)
    }
  },
};
export default createStore({
  // 分模块
  modules: {
    moduleA,
    moduleB,
  },
});
