import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// 引入布局组件
import Layout from "@/layout/index.vue";

// 路由配置
const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "home",
    component: Layout,
  },
];
// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
});
// 导出路由实例
export default router;
