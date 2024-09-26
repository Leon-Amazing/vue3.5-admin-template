import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginVue from "eslint-plugin-vue"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"

import { createRequire } from "module"
const require = createRequire(import.meta.url)
const autoImport = require("./.eslintrc-auto-import.json")

export default [
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...autoImport.globals
      }
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    files: ["**/*.vue"],
    languageOptions: { parserOptions: { parser: tseslint.parser } }
  },
  {
    ignores: ["*.css", "*.jpg", "*.jpeg", "*.png", "*.gif", "*.d.ts"]
  },
  {
    // 自定义规则,根据需要增加  eslint 主要是校验代码规范  prettier  格式化代码的
    rules: {
      "no-console": "warn",
      "vue/multi-word-component-names": "off"
    }
  },
  eslintPluginPrettierRecommended // 覆盖掉eslint的规范，让eslint 按照prettier的规范来
]
