import { createStore } from "vuex";
// 导入vuex持久化插件
import createPersistedstate from "vuex-persistedstate";
import user from "./modules/user";
import cart from "./modules/cart";
import cartegory from "./modules/category";
export default createStore({
  // 分模块
  modules: {
    user,
    cart,
    cartegory,
  },
  plugins: [
    createPersistedstate({
      key: "erabbit-client-pc-store",
      paths: ["user", "cart"],
    }),
  ],
});
