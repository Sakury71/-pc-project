import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// 引入布局组件
import Layout from "@/layout/index.vue";

// 路由配置
const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "/dashboard",
        component: () => import("@/views/Dashboard.vue"),
        name: "dashboard",
        meta: {
          title: "首页",
          icon: "#icondashboard",
        },
      },
    ],
  },
  {
    path: "/system",
    component: Layout,
    name: "system",
    meta: {
      title: "系统管理",
      icon: "Setting",
      roles: ["sys:manage"],
    },
    children: [
      {
        path: "/adminList",
        component: () => import("@/views/system/AdminList.vue"),
        name: "adminList",
        meta: {
          title: "管理员管理",
          icon: "UserFilled",
          roles: ["sys:adminList"],
        },
      },
      {
        path: "/userList",
        component: () => import("@/views/system/UserList.vue"),
        name: "userList",
        meta: {
          title: "用户管理",
          icon: "Wallet",
          roles: ["sys:userList"],
        },
      },
      {
        path: "/menuList",
        component: () => import("@/views/system/MenuList.vue"),
        name: "menuList",
        meta: {
          title: "菜单管理",
          icon: "Menu",
          roles: ["sys:menu"],
        },
      },
    ],
  },
  {
    path: "/goodsRoot",
    component: Layout,
    name: "goodsRoot",
    meta: {
      title: "商品管理",
      icon: "Setting",
      roles: ["sys:goodsRoot"],
    },
    children: [
      {
        path: "/goodsType",
        component: () => import("@/views/goods/GoodsType.vue"),
        name: "goodsType",
        meta: {
          title: "商品分类",
          icon: "UserFilled",
          roles: ["sys:goodsType"],
        },
      },
      {
        path: "/goodsList",
        component: () => import("@/views/goods/GoodsList.vue"),
        name: "goodsList",
        meta: {
          title: "商品信息",
          icon: "Wallet",
          roles: ["sys:GoodsList"],
        },
      },
    ],
  },
  {
    path: "/order",
    component: Layout,
    name: "order",
    meta: {
      title: "订单管理",
      icon: "Setting",
      roles: ["sys:order"],
    },
    children: [
      {
        path: "/orderList",
        component: () => import("@/views/order/OrderList.vue"),
        name: "orderList",
        meta: {
          title: "订单信息",
          icon: "UserFilled",
          roles: ["sys:orderList"],
        },
      },
    ],
  },
  {
    path: "/comment",
    component: Layout,
    name: "comment",
    meta: {
      title: "评论管理",
      icon: "Setting",
      roles: ["sys:comment"],
    },
    children: [
      {
        path: "/commentList",
        component: () => import("@/views/comment/CommentList.vue"),
        name: "commentList",
        meta: {
          title: "评论列表",
          icon: "UserFilled",
          roles: ["sys:commentList"],
        },
      },
    ],
  },
  {
    path: "/banner",
    component: Layout,
    name: "banner",
    meta: {
      title: "广告管理",
      icon: "Setting",
      roles: ["sys:banner"],
    },
    children: [
      {
        path: "/bannerList",
        component: () => import("@/views/banner/BannerList.vue"),
        name: "bannerList",
        meta: {
          title: "广告列表",
          icon: "Postcard",
          roles: ["sys:bannerList"],
        },
      },
    ],
  },
  {
    path: "/report",
    component: Layout,
    name: "report",
    meta: {
      title: "投诉管理",
      icon: "Setting",
      roles: ["sys:report"],
    },
    children: [
      {
        path: "/reportList",
        component: () => import("@/views/report/ReportList.vue"),
        name: "reportList",
        meta: {
          title: "广告列表",
          icon: "Postcard",
          roles: ["sys:reportList"],
        },
      },
    ],
  },
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
});
// 导出路由实例
export default router;
