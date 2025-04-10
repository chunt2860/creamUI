<template>
  <bp-steps v-model="current" type="vertical">
    <bp-step v-for="v in progessList" :description="v.description">{{ v.title }}</bp-step>
  </bp-steps>
</template>

<script setup lang="ts">
import { ref } from "vue";

const current = ref(0);
const progessList = [
  { title: "输入邮箱和邀请码", description: "支持常见邮箱" },
  { title: "校验邮箱", description: "输入邮箱验证码" },
  { title: "设置信息", description: "设置用户名和密码" },
  { title: "完成注册", description: "欢迎你的加入" },
];
</script>
