/*
 * @Descripttion:
 * @version:
 * @Author: chunwen (chunwen.zou@caibeitv.com)
 * @Date: 2021-05-28 16:44:53
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-05-28 18:01:23
 */
import { createStore } from 'vuex'

const defaultState = {
  count: 0
}

// Create a new store instance.
export default createStore({
  state() {
    return defaultState
  },
  mutations: {
    increment(state: typeof defaultState) {
      state.count += 1
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  },
  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count
    }
  }
})
