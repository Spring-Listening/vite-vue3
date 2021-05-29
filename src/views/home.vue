<!--
 * @Descripttion:
 * @version:
 * @Author: chunwen (chunwen.zou@caibeitv.com)
 * @Date: 2021-05-28 15:02:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-05-29 13:42:05
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

export default defineComponent({
  setup() {
    const store = useStore()
    const handleClick = () => {
      store.commit('increment')
    }
    const handleAction = () => {
      store.dispatch('increment')
    }
    return {
      store,
      handleClick,
      handleAction
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
