import { topCategory } from "@/api/constants.js";
import { findAllCategory } from "@/api/category";
export default {
  namespaced: true,
  state() {
    return {
      // 分类信息，依赖topCategory重新设置，保证初始化就有数据，不至于白屏
      list: topCategory.map((item, index) => ({ name: item })),
    };
  },
  mutations: {
    setList(state, payload) {
      state.list = payload;
    },
  },
  actions: {
    async getList(ctx) {
      const { result } = await findAllCategory();
      ctx.commit("setList", result);
    },
  },
};
