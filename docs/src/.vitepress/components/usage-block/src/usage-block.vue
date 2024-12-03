<template>
  <div class="usage-block">
    <div class="demo-area">
      <div class="title">{{ title }}</div>
      <div class="content">
        <slot name="demo" />
      </div>
    </div>
    <div class="config-area">
      <div class="title">配置项</div>
      <div class="content">
        <slot name="config" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: { type: String },
});
</script>
