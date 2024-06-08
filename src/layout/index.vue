<template>
  <el-container class="container">
    <el-aside width="auto" class="aside">
      <Menu></Menu>
    </el-aside>
    <el-container>
      <el-header class="header">
        <Collapse></Collapse>
        <BreadCrumb></BreadCrumb>
      </el-header>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import Menu from './Menu.vue'
import Collapse from './Collapse.vue';
import BreadCrumb from './BreadCrumb.vue'
</script>
<style lang="scss" scoped>
.container {
  height: 100%;

  .aside {
    background-color: #304156;
    ;
  }

  .header {
    background-color: #009688;
    display: flex;
    align-items: center;
    color: #FFF;
  }

  .main {
    background-color: #e7eaec;
  }
}
</style>