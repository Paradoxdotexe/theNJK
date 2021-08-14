<template>
  <div class="banner">
    <div class="banner__pattern">
      <Pattern name="Dot" :size="100"></Pattern>
      <Pattern name="Dot" :size="100"></Pattern>
    </div>
    <div class="banner__framework">
      <div class="banner__title">
        <div class="title__text"><slot name="title"></slot></div>
        <Graphics class="title__graphics" :name="graphics"></Graphics>
        <GraphicsMobile class="title__graphics mobile" :name="graphics"></GraphicsMobile>
      </div>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Pattern from '@/components/patterns/Pattern.vue';
import Graphics from '@/components/graphics/Graphics.vue';
import GraphicsMobile from '@/components/graphics/GraphicsMobile.vue';

export default defineComponent({
  name: 'Banner',
  components: {
    Pattern,
    Graphics,
    GraphicsMobile
  },
  props: {
    graphics: {
      type: String,
      required: true
    }
  },
  setup(props) {
    return {
      props
    };
  }
});
</script>

<style lang="scss" scoped>
$tile-size: 100px;

.banner {
  @include mix-shadow-down;
  background: $background-primary;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-top: $header-height;

  .banner__pattern {
    position: absolute;
    width: 400%;
    height: 400%;
    opacity: 0.5;
    z-index: 100;

    svg {
      position: absolute;
      fill: $color-primary;

      &:first-child {
        animation: space1 100s linear infinite;
      }

      &:last-child {
        animation: space2 80s linear infinite;
      }
    }
  }

  .banner__framework {
    @include mix-framework;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 101;

    .banner__title {
      position: relative;
      width: 100%;
      height: calc(180px * var(--graphics-scale));
      margin-bottom: $gap-xl * 2;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: -$gap-xl;
      --text-scale: 0.25;
      --graphics-scale: 1;

      .title__text {
        font-size: calc(96px * var(--text-scale));
        font-weight: bold;
        text-align: center;
        z-index: 102;

        ::v-deep(span) {
          -webkit-text-stroke-width: 0.5px;
          -webkit-text-stroke-color: white;
          color: $background-primary;
        }
      }

      .title__graphics {
        position: absolute;
        height: 100%;

        &:not(.mobile) {
          display: none;
        }
      }
    }
  }
}

@keyframes space1 {
  from {
    transform: translate(0, 0) rotateZ(0) rotateX(30deg);
  }
  to {
    transform: translate($tile-size, $tile-size) rotateZ(360deg) rotateX(30deg);
  }
}

@keyframes space2 {
  from {
    transform: rotateZ(-60deg) rotateY(45deg);
  }
  to {
    transform: rotateZ(300deg) rotateY(45deg);
  }
}

@media (min-width: $breakpoint-xs) {
  .banner .banner__framework .banner__title {
    --text-scale: 0.32;
    --graphics-scale: 0.32 / 0.25;
  }
}

@media (min-width: $breakpoint-sm) {
  .banner .banner__framework .banner__title {
    --text-scale: 0.45;
    --graphics-scale: 0.45 / 0.25;
  }
}

@media (min-width: $breakpoint-md) {
  .banner .banner__framework .banner__title {
    height: calc(400px * var(--graphics-scale));
    margin-bottom: $gap-xl;
    --text-scale: 0.6;
    --graphics-scale: 0.6;

    .title__text {
      ::v-deep(span) {
        -webkit-text-stroke-width: 1px;
      }
    }

    .title__graphics {
      &:not(.mobile) {
        display: unset;
      }

      &.mobile {
        display: none;
      }
    }
  }
}

@media (min-width: $breakpoint-lg) {
  .banner .banner__framework .banner__title {
    --text-scale: 0.8;
    --graphics-scale: 0.8;
  }
}

@media (min-width: $breakpoint-xl) {
  .banner .banner__framework .banner__title {
    --text-scale: 1;
    --graphics-scale: 1;
  }
}
</style>
