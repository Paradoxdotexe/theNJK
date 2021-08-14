<template>
  <div class="expansion-panel">
    <div
      class="expansion-panel__header"
      v-ripple
      @click="toggle"
      tabindex="0"
      @keypress="onKeyPress"
    >
      <div class="expansion-panel__title">{{ title }}</div>
      <Icon class="expansion-panel__arrow" v-bind:class="{ rotated: refs.open }" name="Arrow" />
    </div>
    <transition name="gap">
      <div v-if="refs.open" class="expansion-panel__gap"></div>
    </transition>
    <div
      ref="slot"
      class="expansion-panel__slot"
      :style="{ height: refs.open ? refs.slotHeight : '0' }"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted } from 'vue';
import Icon from '@/components/icons/Icon.vue';

export default defineComponent({
  name: 'ExpansionPanel',
  components: {
    Icon
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const slot = ref<HTMLElement>();
    const refs = reactive({
      open: false,
      slotHeight: '0'
    });

    onMounted(() => {
      getSlotHeight();
      window.addEventListener('resize', () => getSlotHeight());
    });

    function getSlotHeight() {
      if (slot.value && slot.value.children[0]) {
        refs.slotHeight = `${slot.value.children[0].clientHeight}px`;
      }
    }

    function toggle() {
      refs.open = !refs.open;
    }

    function onKeyPress(event: KeyboardEvent) {
      if ((event.keyCode && event.keyCode === 13) || event.key === '13') {
        toggle();
      }
    }

    return {
      props,
      slot,
      refs,
      toggle,
      onKeyPress
    };
  }
});
</script>

<style lang="scss" scoped>
.expansion-panel {
  .expansion-panel__header {
    @include mix-card;
    position: relative;
    overflow: hidden;
    background: $accent-primary;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:focus {
      background: $accent-secondary;
      outline: none !important;
    }

    .expansion-panel__title {
      font-size: $font-size-lg;
      font-weight: bold;
    }

    .expansion-panel__arrow {
      min-width: $font-size-lg;
      width: $font-size-lg;
      transform: rotate(90deg);
      transition: transform $transition-duration $transition-timing;
      margin-left: $gap-md;

      &.rotated {
        transform: rotate(-90deg);
      }
    }
  }

  .expansion-panel__gap {
    height: $gap-md;
    transition: height 0s linear $transition-duration;

    &.gap-leave-to {
      height: 0 !important;
    }
  }

  .expansion-panel__slot {
    overflow: hidden;
    transition: height $transition-duration $transition-timing;
  }
}
</style>
