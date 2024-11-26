<template>
  <teleport to="body">
    <transition name="modal-fade">
      <div v-show="model" :class="`${clsBlockName}-wrapper`"></div>
    </transition>

    <transition :name="`slide-${placement}`">
      <div ref="drawerRef" v-show="model" :class="[`${clsBlockName}`, `${clsBlockName}-${placement}`]">
        <div :class="`${clsBlockName}-header`">
          <slot name="header">
            <span :class="`${clsBlockName}-header-title`">{{ title }}</span>
          </slot>
          <IconCloseFill v-if="!hideClose" :class="`${clsBlockName}-header-close`" size="20" @click="handleClose" />
        </div>

        <div :class="`${clsBlockName}-body`">
          <slot />
        </div>

        <div v-if="!hideFooter" :class="`${clsBlockName}-footer`">
          <slot name="footer">
            <bp-button @click="handleCancel">{{ cancleText }}</bp-button>
            <bp-button status="primary" type="normal" :loading="okLoading" @click="handleConfirm">
              {{ okText }}
            </bp-button>
          </slot>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { useNamespace } from '@birdpaper-ui/hooks';
import { DrawerProps, drawerProps } from './props';
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue';

defineOptions({ name: "Drawer" });
const { clsBlockName } = useNamespace("drawer");

const model = defineModel<boolean>({ type: Boolean, required: true });
const props: DrawerProps = defineProps(drawerProps);
const emit = defineEmits(['cancel', 'confirm']);

const drawerRef = ref(null)

onClickOutside(drawerRef, () => {
  if (!props.maskClosable) return;
  return handleCancel();
})

const handleClose = () => {
  model.value = false;
};

const handleCancel = () => {
  model.value = false;
  emit('cancel');
};

const handleConfirm = async () => {
  if (props.okLoading) return;

  const canClose = await props.onBeforeOk();
  if (canClose) {
    model.value = false;
    emit('confirm');
  }
};
</script>
