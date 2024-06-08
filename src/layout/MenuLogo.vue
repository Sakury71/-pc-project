<template>
  <div class="logo">
    <img :src="MenuLogo" alt="logo" />
    <span v-if="show" class="logo-title">{{ title }}</span>
  </div>
</template>
<script setup lang="ts">
import MenuLogo from '@/assets/logo.jpg'
import { ref, watch } from "vue";
import { collapseStore } from '@/store/collapse/index';
// 引入 collapseStore
const store = collapseStore()

const title = ref("文都易物空间");
const show = ref(true)
watch(
  () => store.getCollapse,
  (collapsed: boolean) => {
    if (!collapsed) {
      setTimeout(() => {
        show.value = !collapsed;//延迟执行
      }, 300);
    } else {
      show.value = !collapsed;
    }
  }
)
</script>
<style lang="scss" scoped>
.logo {
  display: flex;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: #2b2f3a;
  text-align: center;
  cursor: pointer;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    margin-right: 3px;
    margin-left: 12px;
  }

  .logo-title {
    color: #fff;
    font-weight: 800;
    line-height: 60px;
    font-size: 24px;
    font-family: "楷体";
  }
}
</style>