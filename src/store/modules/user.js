export default {
  namespaced: true,
  // 一个语法要求，这样这个数据就在这个函数里，类似于vue2的data
  state() {
    return {
      // 用户信息
      profile: {
        id: "",
        avatar: "",
        nickname: "",
        account: "",
        mobile: "13283719347",
        token: ""
      }
    }
  },
  mutations: {
    /**
     * 测试数据是否为持久化
     * @param { Object } state 
     * @param { Object } playLoad 用户信息对象
     */
    setUser (state, playLoad) {
      state.profile.mobile = playLoad
    }
  }
}
