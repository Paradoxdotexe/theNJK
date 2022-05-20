<template>
  <div class="banner" :class="props.reduced ? 'reduced' : ''">
    <div class="banner__pattern">
      <Pattern name="Dot" :size="100"></Pattern>
      <Pattern name="Dot" :size="100"></Pattern>
    </div>
    <div class="banner__framework">
      <div class="banner__title">
        <div class="title__text"><slot name="title"></slot></div>
        <!--<Graphics class="title__graphics" :name="graphics"></Graphics>
        <GraphicsMobile class="title__graphics mobile" :name="graphics"></GraphicsMobile>-->
      </div>
      <slot name="content"></slot>
    </div>
    <button class="banner__scroll" @click="autoScroll()" tabindex="0" v-ripple>
      Scroll down
      <Icon name="ArrowThin" />
    </button>
    <div id="scroll-mark"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Pattern from '@/components/patterns/Pattern.vue';
// import Graphics from '@/components/graphics/Graphics.vue';
// import GraphicsMobile from '@/components/graphics/GraphicsMobile.vue';
import Icon from '@/components/icons/Icon.vue';

export default defineComponent({
  name: 'Banner',
  components: {
    Pattern,
    // Graphics,
    // GraphicsMobile,
    Icon
  },
  props: {
    graphics: {
      type: String,
      required: true
    },
    reduced: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    function autoScroll() {
      window.scroll({ top: document.getElementById('scroll-mark')!.offsetTop, behavior: 'smooth' });
    }

    return {
      props,
      autoScroll
    };
  }
});
</script>

<style lang="scss" scoped>
$tile-size: 100px;

.banner {
  @include mix-shadow-down;
  background: var(--background-primary);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-top: $header-height;

  &.reduced {
    height: auto;
    padding: ($header-height + $gap-xl * 2) 0 $gap-xl * 2;

    .banner__scroll {
      display: none;
    }
  }

  .banner__pattern {
    position: absolute;
    width: 400%;
    height: 400%;
    opacity: 0.5;
    z-index: 100;

    svg {
      position: absolute;
      fill: var(--color-primary);

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
    gap: $gap-xl;
    align-items: center;
    z-index: 101;

    .banner__title {
      position: relative;
      width: 100%;
      // height: calc(180px * var(--graphics-scale));
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: -$gap-md;
      --text-scale: 0.25;
      // --graphics-scale: 1;

      .title__text {
        font-size: calc(96px * var(--text-scale));
        font-weight: bold;
        text-align: center;
        z-index: 102;

        ::v-deep(span) {
          -webkit-text-stroke-width: 0.5px;
          -webkit-text-stroke-color: white;
          color: var(--background-primary);
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

  .banner__scroll {
    @include mix-button;
    position: absolute;
    bottom: $gap-lg;
    cursor: pointer;
    display: flex;
    border-radius: $border-radius;
    padding: $gap-sm;
    flex-direction: column;
    align-items: center;
    z-index: 103;

    &:focus,
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      outline: none;
    }

    svg {
      width: 28px;
      height: 28px;
      fill: var(--color-primary);
      margin-top: $gap-sm;
      $hover-animation: hover 3s ease-in-out infinite;
      -webkit-animation: $hover-animation;
      -o-animation: $hover-animation;
      animation: $hover-animation;
    }
  }

  #scroll-mark {
    position: absolute;
    bottom: $header-height;
  }
}

@keyframes hover {
  $hover-distance: 4px;
  from {
    transform: rotateZ(90deg) translateX(-$hover-distance);
  }
  50% {
    transform: rotateZ(90deg) translateX($hover-distance);
  }
  to {
    transform: rotateZ(90deg) translateX(-$hover-distance);
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
    // --graphics-scale: 0.32 / 0.25;
  }
}

@media (min-width: $breakpoint-sm) {
  .banner .banner__framework .banner__title {
    --text-scale: 0.45;
    // --graphics-scale: 0.45 / 0.25;
  }
}

@media (min-width: $breakpoint-md) {
  .banner .banner__framework .banner__title {
    // height: calc(400px * var(--graphics-scale));
    --text-scale: 0.6;
    // --graphics-scale: 0.6;

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
  .banner {
    &.reduced {
      padding: ($header-height + $gap-xl * 3) 0 $gap-xl * 3;
    }

    .banner__framework {
      gap: $gap-xl * 2;

      .banner__title {
        --text-scale: 0.8;
        // --graphics-scale: 0.8;
      }
    }
  }
}

@media (min-width: $breakpoint-xl) {
  .banner .banner__framework .banner__title {
    --text-scale: 1;
    // --graphics-scale: 1;
  }
}
</style>
