<template>
  <el-container class="container">
    <el-aside width="220px" class="aside">
      <Menu></Menu>
    </el-aside>
    <el-container>
      <el-header class="header">Header</el-header>
      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import Menu from './Menu.vue'
</script>
<style lang="scss" scoped>
.container {
  height: 100%;

  .aside {
    background-color: #3b618c;
  }

  .header {
    background-color: #0aaa95;
  }

  .main {
    background-color: #e7eaec;
  }
}
</style>