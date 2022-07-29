/*
 * @Descripttion:
 * @version:
 * @Author: chunwen (chunwen.zou@caibeitv.com)
 * @Date: 2021-05-28 14:44:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-28 18:50:18
 */
declare module '*.vue' {
  import { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@/router/index'
declare module '@/store/index'
declare module '@/api/http'

declare module 'element-plus'
