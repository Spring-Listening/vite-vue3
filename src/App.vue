<!--
 * @Descripttion:
 * @version:
 * @Author: chunwen (chunwen.zou@caibeitv.com)
 * @Date: 2021-05-28 14:44:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-28 15:31:35
-->
<template>
  <el-config-provider namespace="ep">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </el-config-provider>
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
}
</style>
