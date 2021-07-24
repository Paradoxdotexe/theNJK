<template>
  <div class="content-header">
    <div class="content-header__path">{{ path }}</div>
    <div class="content-header__title">{{ title }}</div>
    <div class="content-header__subtitle"><slot></slot></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "ContentHeader",
  props: {
    path: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  setup(props) {
    return {
      props
    }
  }
});
</script>

<style lang="scss" scoped>
.content-header {
  margin: $gap-xl * 2 0 $gap-xl;
  max-width: 800px;

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
  }
}
</style>
