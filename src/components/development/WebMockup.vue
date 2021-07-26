<template>
  <div class="web-mockup">
    <div class="web-mockup__header">
      <div class="web-mockup__dots">
        <div v-for="i of [0, 1, 2]" :key="i" class="web-mockup__dot"></div>
      </div>
      <div class="web-mockup__search-bar"></div>
    </div>
    <div class="web-mockup__image" :style="{ 'background-image': `url(${path})` }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WebMockup',
  props: {
    path: {
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
$mockup-border-radius: $border-radius * 1.5;

.web-mockup {
  width: $max-width;
  border-radius: $mockup-border-radius;
  overflow: hidden;
  border: $gap-sm * 0.5 solid $background-primary;
  background: $background-primary;
  display: flex;
  flex-direction: column;
  box-sizing: content-box;

  .web-mockup__header {
    position: relative;
    width: 100%;
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
    height: 638px;
    background-size: contain;
    border-bottom-left-radius: $mockup-border-radius - 2px;
    border-bottom-right-radius: $mockup-border-radius - 2px;
  }
}
</style>
