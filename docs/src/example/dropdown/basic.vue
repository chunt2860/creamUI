<template>
  <bp-dropdown @select="handleSelect">
    <bp-button status="gray" type="secondary">下</bp-button>

    <template #content>
      <bp-doption value="1">选项一</bp-doption>
      <bp-doption value="2">选项二</bp-doption>
      <bp-doption value="3">选项三</bp-doption>
      <bp-doption value="4">选项四</bp-doption>
      <bp-doption value="5">选项五</bp-doption>
    </template>
  </bp-dropdown>
</template>

<script setup lang="ts">
const handleSelect = (value: string) => {
  console.log(value);
};
</script>
