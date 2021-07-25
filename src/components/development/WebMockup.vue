<template>
  <div class="web-mockup">
    <div class="web-mockup__header">
      <div class="web-mockup__dots">
        <div v-for="i of [0, 1, 2]" :key="i" class="web-mockup__dot"></div>
      </div>
      <div class="web-mockup__search-bar"></div>
    </div>
    <div class="web-mockup__image" :style="{ 'background-image': `url(${src})` }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: "WebMockup",
  props: {
    path: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const src = computed(() => require(`@/assets/content/development${props.path}`));

    return {
      src
    }
  }
});
</script>

<style lang="scss" scoped>
  .web-mockup {
    width: 1000px;
    border-radius: $border-radius;
    overflow: hidden;
    border: 2px solid $background-secondary;
    display: flex;
    flex-direction: column;

    .web-mockup__header {
      position: relative;
      width: 100%;
      background: $background-secondary;
      display: flex;
      justify-content: center;
      align-items: center;
      height: $gap-xl;

      .web-mockup__dots {
        position: absolute;
        left: $gap-md;
        display: flex;

        .web-mockup__dot {
          height: $gap-sm * 1.5;
          width: $gap-sm * 1.5;
          border-radius: $gap-sm;
          background: $background-tertiary;

          &:not(:last-child) {
            margin-right: $gap-sm;
          }
        }
      }

      .web-mockup__search-bar {
        width: 50%;
        height: $gap-md;
        border-radius: $gap-md;
        background: $background-tertiary;
      }
    }

    .web-mockup__image {
      height: 625px;
      background-size: contain;
    }
  }
</style>
