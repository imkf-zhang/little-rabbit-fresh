import { createStore } from 'vuex'
// vue2.0 创建仓库 new Vuex.Store({ })
// vue3.0 创建仓库 createStore({ })
export default createStore({
  state: {
    // 数据
    username: 'zs',
    age: 56
  },
  getters: {
    // vuex的计算属性
    newName (state) {
      return state.username + '!!!'
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
    updateName (ctx) {
      console.log('触发了')
      // 发请求
      setTimeout(() => {
        ctx.commit('updateAge', 46)
      }, 1000)
    }
  },
  modules: {
    // 分模块
  }
})
