import { createStore } from 'vuex'

// vue2.0 创建仓库 new Vuex.Store({ })
// vue3.0 创建仓库 createStore({ })
export default createStore({
  state: {
    // 数据
  },
  getters: {
    // vuex的计算属性
  },
  mutations: {
    // 更改数据函数
  },
  actions: {
    // 请求数据函数
  },
  modules: {
    // 分模块
  }
})
