import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"
import UnoCSS from "unocss/vite"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import ElementPlus from "unplugin-element-plus/vite"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src")
      }
    ]
  },
  plugins: [
    vue(),
    UnoCSS(),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"], // 顺便⾃动导⼊vue vue-router pinia
      resolvers: [ElementPlusResolver()],
      eslintrc: { enabled: false } // 改成true ⽣成⼀次后禁⽤即可
    }),
    Components({
      dirs: ["src/components", "src/layout/components"], // 后⾯布局组件也有相关的组件期望⾃动导⼊
      resolvers: [ElementPlusResolver()] // ⽣成的组件的类型放到这⾥
    }),
    ElementPlus({}) // 导入样式 不需要引入
  ]
})
