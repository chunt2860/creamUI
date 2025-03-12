<template>
  <div class="button-demo">
    <template v-for="status in buttonStatus" :key="status.value">
      <div class="button-row">
        <bp-button v-for="type in buttonTypes" :key="type" :status="status.value" :type>
          {{ status.name }}
        </bp-button>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
const buttonStatus = [
  { name: "灰度", value: "gray" },
  { name: "主色", value: "primary" },
  { name: "成功", value: "success" },
  { name: "警示", value: "warning" },
  { name: "危险", value: "danger" },
] as const;
const buttonTypes = ["secondary", "normal", "plain", "dashed", "text"] as const;
</script>

<style lang="scss" scoped>
.button-demo {
  .button-row {
    margin-bottom: 8px;
  }
}
</style>
