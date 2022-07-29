<!--
 * @Descripttion:
 * @version:
 * @Author: chunwen (chunwen.zou@caibeitv.com)
 * @Date: 2021-05-28 15:02:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-28 18:42:43
-->
<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
      <el-button @click="handleClick">确认</el-button>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ElMessage } from 'element-plus'

export default defineComponent({
  components: {},
  setup() {
    const handleClick = () => {
      ElMessage.success('sdfs')
    }
    return { handleClick }
  }
})
</script>
<style lang="scss" scoped>
.ep-container {
  height: 100vh;
  .ep-aside {
    background: blueviolet;
  }
  .ep-container {
    background: #eee;

    .ep-header {
      background: yellowgreen;
    }
  }
}
</style>
