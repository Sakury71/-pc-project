import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 配置项目根路径
  base: "/home",
  server: {
    host: "0.0.0.0", //指定服务器应该监听哪个 IP 地址。 如果将此设置为 0.0.0.0 将监听所有地址，包括局域网和公网地址。
    port: 8080, //配置端口号
    hmr: true, //开启热更新
    open: true, //启动在浏览器打开
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "src"),
      },
    ],
  },
});
