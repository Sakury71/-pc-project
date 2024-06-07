import { createApp } from "vue";
// 引入pinia
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";

//引入路由
import router from "./router";
//引入ElementPlus
import ElementPlus from "element-plus";
//引入ElementPlus样式
import "element-plus/dist/index.css";
//引入ElementPlus图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
//创建Vue实例
const app = createApp(App);
//创建pinia实例
const pinia = createPinia();
//挂载路由
app.use(router).use(ElementPlus).use(pinia).mount("#app");
//全局注册图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
