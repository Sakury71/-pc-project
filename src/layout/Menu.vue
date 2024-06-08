<template>
  <MenuLogo></MenuLogo>
  <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" :collapse="isCollapse" unique-opened router
    background-color="#304156">
    <MenuItem :menuList="menuList">
    </MenuItem>
  </el-menu>
</template>
<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import MenuItem from './MenuItem.vue';
import MenuLogo from './MenuLogo.vue' //logo
import { useRoute } from 'vue-router'; //获取路由信息
import { collapseStore } from '@/store/collapse/index';
//引入 collapseStore
const collStore = collapseStore()
//获取路由信息
const route = useRoute();
//获取激活的菜单
const activeIndex = computed(() => {
  const { path } = route;
  return path;
})
//菜单数据
let menuList = reactive([
  {
    path: "/dashboard",
    component: "Layout",
    name: "dashboard",
    meta: {
      title: "首页",
      icon: "HomeFilled",
      roles: ["sys:dashboard"],
    },
  },
  {
    path: "/system",
    component: "Layout",
    name: "system",
    meta: {
      title: "系统管理",
      icon: "Setting",
      roles: ["sys:manage"],
    },
    children: [
      {
        path: "/adminList",
        component: "/system/AdminUser",
        name: "adminUser",
        meta: {
          title: "权限管理",
          icon: "UserFilled",
          roles: ["sys:adminUser"],
        },
      },
      {
        path: "/userList",
        component: "/system/UserList",
        name: "userList",
        meta: {
          title: "用户管理",
          icon: "Wallet",
          roles: ["sys:userList"],
        },
      },
      {
        path: "/menuList",
        component: "/system/MenuList",
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
    component: "Layout",
    name: "goodsRoot",
    meta: {
      title: "商品管理",
      icon: "Setting",
      roles: ["sys:goodsRoot"],
    },
    children: [
      {
        path: "/goodsType",
        component: "/goods/GoodsType",
        name: "goodsType",
        meta: {
          title: "商品分类",
          icon: "UserFilled",
          roles: ["sys:goodsType"],
        },
      },
      {
        path: "/goodsList",
        component: "/goods/GoodsList",
        name: "goodsList",
        meta: {
          title: "商品信息",
          icon: "Wallet",
          roles: ["sys:goodsList"],
        },
      },
    ],
  },
  {
    path: "/order",
    component: "Layout",
    name: "order",
    meta: {
      title: "订单管理",
      icon: "Setting",
      roles: ["sys:order"],
    },
    children: [
      {
        path: "/orderList",
        component: "/order/OrderList",
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
    component: "Layout",
    name: "comment",
    meta: {
      title: "评论管理",
      icon: "Setting",
      roles: ["sys:comment"],
    },
    children: [
      {
        path: "/commentList",
        component: "/comment/CommentList",
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
    component: "Layout",
    name: "banner",
    meta: {
      title: "广告管理",
      icon: "Setting",
      roles: ["sys:banner"],
    },
    children: [
      {
        path: "/bannerList",
        component: "banner/BannerList",
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
    component: "Layout",
    name: "report",
    meta: {
      title: "投诉管理",
      icon: "Setting",
      roles: ["sys:report"],
    },
    children: [
      {
        path: "/reportList",
        component: "report/ReportList",
        name: "reportList",
        meta: {
          title: "投诉列表",
          icon: "Postcard",
          roles: ["sys:reportList"],
        },
      },
    ],
  }
]);
//折叠
const isCollapse = computed(() => {
  return collStore.getCollapse
})
//展开
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
//关闭
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>
<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 230px;
  min-height: 400px;
}

.el-menu {
  border-right: none;
}

:deep(.el-sub-menu .el-sub-menu__title) {
  color: #f4f4f5 !important;
}

:deep(.el-menu .el-menu-item) {
  color: #bfcbd9;
}

/* 菜单点中文字的颜色 */
:deep(.el-menu-item.is-active) {
  color: #409eff !important;
}

/* 当前打开菜单的所有子菜单颜色 */
:deep(.is-opened .el-menu-item) {
  background-color: #1f2d3d !important;
}

/* 鼠标移动菜单的颜色 */
:deep(.el-menu-item:hover) {
  background-color: #001528 !important;
}
</style>