/*
 * @Descripttion:
 * @version:
 * @Author: chunwen (chunwen.zou@caibeitv.com)
 * @Date: 2021-05-28 14:44:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-28 18:42:08
 */
import { createApp } from 'vue'
import App from '@/App.vue'
import '@/assets/style/common.scss'

import 'element-plus/theme-chalk/src/message.scss'

import router from '@/router/index'
import store from '@/store/index'

createApp(App).use(router).use(store).mount('#app')
