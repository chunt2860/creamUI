<template>
  <bp-space>
    <bp-avatar v-for="size in sizeList" :size>
      <IconUser3Line />
      <!-- birdpaper-ui -->
    </bp-avatar>
  </bp-space>
</template>

<script setup lang="ts">
// const sizeList = ["default"];
const sizeList = ["mini", "small", "default", "large"];
</script>