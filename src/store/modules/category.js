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
    // 二级分类的显示和隐藏
    show(state, id) {
      state.list.find((item) => item.id === id).open = true;
    },
    hide(state, id) {
      state.list.find((item) => item.id === id).open = false;
    },
  },
  actions: {
    async getList(ctx) {
      const { result } = await findAllCategory();
      result.forEach((item) => (item.open = false));
      ctx.commit("setList", result);
    },
  },
};
