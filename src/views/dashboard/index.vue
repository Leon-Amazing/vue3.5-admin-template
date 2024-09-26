<template>
  <el-button>hello</el-button>

  <HelloWorld msg="hi"></HelloWorld>

  <el-button @click="handle">消息</el-button>
</template>

<script lang="ts" setup>
// 将这些服务型的组件 放到 实例上来 调用
const { proxy } = getCurrentInstance()!

const handle = () => {
  proxy?.$message("This is a message.")
}
</script>
