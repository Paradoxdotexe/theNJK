<template>
  <div class="banner">
    <div class="banner__pattern" :style="{ left: `${ refs.patternOffset }px` }">
      <Pattern name="Dot" :size="100"></Pattern>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, onUnmounted, onMounted } from 'vue';
import Pattern from '@/components/patterns/Pattern.vue';

export default defineComponent({
  name: 'Banner',
  components: {
    Pattern
  },
  setup() {
    const refs: { [key: string]: any } = reactive({
      windowWidth: window.innerWidth,
      patternOffset: computed(() => (refs.windowWidth % 100) / 2) // offsets pattern to center dots
    });

    onMounted(() => window.addEventListener('resize', onWidthChange));
    onUnmounted(() => window.removeEventListener('resize', onWidthChange));

    const onWidthChange = () => {
      refs.windowWidth = window.innerWidth;
    };

    return {
      refs
    }
  }
});
</script>

<style lang="scss" scoped>
  .banner {
    background: $background-tertiary;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    .banner__pattern {
      position: absolute;
      padding-top: $header-height;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      transition: left $transition-duration $transition-timing;
      opacity: 0.5;

      svg {
        fill: $color-primary;
      }
    }
  }
</style>
