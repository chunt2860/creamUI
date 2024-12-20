<template>
  <bp-checkbox v-model="isSelectAll" :indeterminate @change="onSelectAllChange">全选</bp-checkbox>

  <bp-checkbox-group v-model="val" style="margin-top: 20px" @change="onChange">
    <bp-checkbox v-for="v in options" :value="v">{{ v }}</bp-checkbox>
  </bp-checkbox-group>
</template>

<script setup lang="ts">
import { ref } from "vue";

const val = ref<string[]>([]);
const indeterminate = ref(false);
const options = ["选项一", "选项二", "选项三", "选项四"];

const isSelectAll = ref(false);
const onSelectAllChange = (v: boolean) => {
  if (!v) {
    val.value = [];
    return;
  }

  val.value = [...options];
};

const onChange = (e: string[]) => {
  if (!e.length) return (isSelectAll.value = false);

  isSelectAll.value = true;
  if (e.length === options.length) {
    indeterminate.value = false;
    return;
  }

  indeterminate.value = true;
};
</script>
