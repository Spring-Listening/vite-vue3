<!--
 * @Descripttion: 
 * @version: 
 * @Author: chunwen (chunwen.zou@caibeitv.com)
 * @Date: 2021-05-28 14:44:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-05-28 17:06:58
-->
<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {}
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
