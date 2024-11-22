<template>
  <teleport to="body">
    <transition name="modal-fade">
      <div v-show="model" :class="`${clsBlockName}-wrapper`"></div>
    </transition>

    <transition name="modal-zoom">
      <div v-show="model" :class="`${clsBlockName}-container`">
        <div :class="[
          `${clsBlockName}`,
          { 'is-fullscreen': fullscreen },
          { 'is-center': center }
        ]" :style="modalStyle">
          <div :class="`${clsBlockName}-header`">
            <slot name="header">
              <span :class="`${clsBlockName}-header-title`">{{ title }}</span>
            </slot>
            <!-- <span v-if="!hideClose" :class="`${clsBlockName}-header-close`" @click="handleClose" >关闭</span> -->
            <IconCloseFill v-if="!hideClose" :class="`${clsBlockName}-header-close`" size="20" @click="handleClose" />
          </div>

          <div :class="`${clsBlockName}-body`">
            <slot></slot>
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
import { computed } from 'vue';
import { ModalProps, modalProps } from './props';
import { IconCloseFill } from 'birdpaper-icon';

defineOptions({ name: 'Modal' });
const { clsBlockName } = useNamespace("modal");

const model = defineModel({ default: false });
const props: ModalProps = defineProps(modalProps);
const emit = defineEmits(['cancel', 'confirm']);

const modalStyle = computed(() => ({
  width: typeof props.width === 'number' ? `${props.width}px` : props.width,
  marginTop: props.top,
  marginBottom: props.bottom
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
</script>