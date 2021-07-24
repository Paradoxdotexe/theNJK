<template>
  <div class="banner">
    <div class="banner__pattern" :style="{ left: `${ refs.patternOffset }px` }">
      <Pattern name="Dot" :size="100"></Pattern>
    </div>
    <div class="banner__framework">
      <div class="banner__title">
        <div class="title__text"><slot name="title"></slot></div>
        <Graphics class="title__graphics" :name="graphics"></Graphics>
      </div>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, onUnmounted, onMounted } from 'vue';
import Pattern from '@/components/patterns/Pattern.vue';
import Graphics from "@/components/graphics/Graphics.vue";

export default defineComponent({
  name: 'Banner',
  components: {
    Pattern,
    Graphics
  },
  props: {
    graphics: {
      type: String,
      required: true
    }
  },
  setup(props) {
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
      props,
      refs
    }
  }
});
</script>

<style lang="scss" scoped>
  $tile-size: 100px;

  .banner {
    position: relative;
    overflow: hidden;
    background: $background-tertiary;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    padding-top: $header-height;

    .banner__pattern {
      position: absolute;
      left: 0;
      top: $header-height;
      width: calc(100% + #{$tile-size});
      height: calc(100% + #{$tile-size});
      margin: (-$tile-size) 0 0 (-$tile-size);
      transition: left $transition-duration $transition-timing;
      opacity: 0.5;
      z-index: 50;
      animation: space 5s linear infinite;

      svg {
        fill: $color-primary;
      }
    }

    .banner__framework {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 51;

      .banner__title {
        position: relative;
        width: 1200px;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -$gap-xl;

        .title__text {
          font-size: $font-size-xxl;
          font-weight: bold;
          text-align: center;
          z-index: 52;

          ::v-deep(span) {
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: white;
            color: $background-tertiary;
          }
        }

        .title__graphics {
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
  }

  @keyframes space {
    100% {
      transform: translate(100px, 100px);
    }
  }
</style>
