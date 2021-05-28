/*
 * @Descripttion:
 * @version:
 * @Author: chunwen (chunwen.zou@caibeitv.com)
 * @Date: 2021-05-28 14:44:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-05-28 19:16:47
 */
import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'
import store from './store/index'

createApp(App).use(router).use(store).mount('#app')
