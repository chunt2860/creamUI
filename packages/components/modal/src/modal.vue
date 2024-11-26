<template>
  <teleport to="body">
    <transition name="modal-fade">
      <div v-show="model" :class="`${clsBlockName}-wrapper`"></div>
    </transition>

    <transition name="modal-zoom">
      <div ref="modalRef" v-show="model" :class="`${clsBlockName}-container`">
        <div :class="[
          `${clsBlockName}`,
          { 'is-fullscreen': fullscreen },
          { 'is-center': center }
        ]" :style="modalStyle">
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
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import { useNamespace } from '@birdpaper-ui/hooks';
import { computed, ref, watch } from 'vue';
import { ModalProps, modalProps } from './props';
import { IconCloseFill } from 'birdpaper-icon';
import { onClickOutside, useScrollLock } from '@vueuse/core';

defineOptions({ name: 'Modal' });
const { clsBlockName } = useNamespace("modal");

const model = defineModel({ default: false });
const props: ModalProps = defineProps(modalProps);
const emit = defineEmits(['cancel', 'confirm']);

const modalRef = ref(null);
const isScrollLocked = useScrollLock(window.document.body);

onClickOutside(modalRef, () => {
  if (!props.maskClosable) return;
  return handleCancel();
})

const modalStyle = computed(() => ({
  width: typeof props.width === 'number' ? `${props.width}px` : props.width,
  marginTop: props.fullscreen ? 0 : props.top,
  marginBottom: props.fullscreen ? 0 : props.bottom
}));

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

watch(model, (value) => {
  isScrollLocked.value = value;
})
</script>