<template>
  <a @click="copy($event)" href="#" onclick="return false">
    <slot></slot>
    <transition name="popup">
      <div v-if="refs.copied">Copied!</div>
    </transition>
  </a>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'CopyLink',
  setup() {
    let refs = reactive({
      copied: false
    });

    function copy(event: PointerEvent) {
      if (!refs.copied) {
        const text = (event.target as HTMLElement).innerText;
        navigator.clipboard.writeText(text);
        refs.copied = true;
        setTimeout(() => refs.copied = false, 2000);
      }
    }

    return {
      copy,
      refs
    };
  }
});
</script>

<style lang="scss" scoped>
a {
  position: relative;
  display: flex;
  align-items: center;
  width: fit-content;

  .popup-enter-active,
  .popup-leave-active {
    transition: all $transition-duration $transition-timing;
  }

  .popup-enter-from,
  .popup-leave-to {
    opacity: 0;
    left: 100%;
  }

  div {
    position: absolute;
    left: calc(100% + #{$gap-md});
    background: var(--accent-primary);
    padding: $gap-sm $gap-md;
    border-radius: $gap-sm;
    color: var(--color-primary);
    opacity: 1;
    pointer-events: none;
  }
}
</style>
