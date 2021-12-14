import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 创建，挂载，挂载，....
createApp(App).use(store).use(router).mount('#app')
