<!--
 * @Descripttion:
 * @version:
 * @Author: chunwen (chunwen.zou@caibeitv.com)
 * @Date: 2021-05-28 15:02:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-06-12 14:43:58
-->
<template>
  <div class="home-container">
    home 组件
    <div>
      {{ store.state.count }}
    </div>
    <div>getter {{ store.getters.double }}</div>
    <div @click="handleClick">commit</div>
    <div @click="handleAction">action</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import Http from '@/utils/http'

export default defineComponent({
  setup() {
    const store = useStore()
    const handleClick = () => {
      store.commit('increment')
    }
    const handleAction = () => {
      store.dispatch('increment')
    }
    const getData = () => {
      Http.get('url').then((res: Object) => {
        console.log(res)
      })
    }
    return {
      store,
      handleClick,
      handleAction,
      getData
    }
  }
})
</script>
<style lang="scss" scoped>
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: red;
}
</style>
