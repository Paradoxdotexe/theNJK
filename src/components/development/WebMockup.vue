<template>
  <div class="web-mockup">
    <div class="web-mockup__header">
      <div class="web-mockup__dots">
        <div v-for="i of [0, 1, 2]" :key="i" class="web-mockup__dot"></div>
      </div>
      <div class="web-mockup__search-bar"></div>
    </div>
    <img class="web-mockup__image" :src="path" />
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
.web-mockup {
  border-radius: $border-radius;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .web-mockup__header {
    position: relative;
    width: 100%;
    height: 18px;
    background: var(--background-primary);
    display: flex;
    justify-content: center;
    align-items: center;

    .web-mockup__dots {
      position: absolute;
      left: $gap-sm;
      display: flex;

      .web-mockup__dot {
        height: $gap-sm;
        width: $gap-sm;
        border-radius: $gap-sm;
        background: var(--background-tertiary);

        &:not(:last-child) {
          margin-right: $gap-sm * 0.5;
        }
      }
    }

    .web-mockup__search-bar {
      width: 25%;
      height: $gap-sm;
      border-radius: $gap-md;
      background: var(--background-tertiary);
    }
  }
}

@media (min-width: $breakpoint-md) {
  .web-mockup .web-mockup__header {
    height: $gap-xl;

    .web-mockup__dots {
      left: $gap-md;

      .web-mockup__dot {
        height: $gap-sm * 1.5;
        width: $gap-sm * 1.5;

        &:not(:last-child) {
          margin-right: $gap-sm;
        }
      }
    }

    .web-mockup__search-bar {
      width: 50%;
      height: $gap-md;
    }
  }
}
</style>
