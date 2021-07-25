<template>
  <div class="content-header">
    <div v-if="path" class="content-header__path">{{ path }}</div>
    <div class="content-header__title">{{ title }}</div>
    <div class="content-header__subtitle">
      <slot v-if="!subtitle"></slot>
      <template v-else>{{ subtitle }}</template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContentHeader',
  props: {
    path: {
      type: String,
      default: undefined
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: undefined
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
.content-header {
  margin: $gap-xl * 2 0 $gap-xl;
  width: $max-width;

  .content-header__path {
    font-family: $font-family-secondary;
    color: $accent-primary;
    margin-bottom: $gap-lg;
  }

  .content-header__title {
    font-size: $font-size-xl;
    font-weight: 500;
    margin-bottom: $gap-sm;
  }

  .content-header__subtitle {
    color: $color-secondary;
    max-width: 800px;
  }
}
</style>
