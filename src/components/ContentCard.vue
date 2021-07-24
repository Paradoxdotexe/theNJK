<template>
  <div class="content-card">
    <div class="content-card__title">{{ title }}</div>
    <div class="content-card__subtitle">{{ subtitle }}</div>
    <div class="content-card__tag">{{tag }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "ContentHeader",
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    tag: {
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
.content-card {
  @include mix-shadow-down;
  position: relative;
  background: $background-tertiary;
  width: 400px;
  border-radius: $border-radius;
  padding: $gap-sm $gap-md;
  line-height: 100%;

  &:not(:last-child) {
    margin-bottom: $gap-md;
  }

  .content-card__title {
    font-weight: 500;
    margin-bottom: $gap-sm / 2;
  }

  .content-card__subtitle {
    color: $color-secondary;
    font-style: italic;
  }

  .content-card__tag {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 80%;
    background: $accent-primary;
    right: $gap-sm;
    bottom: $gap-sm;
    border-radius: $gap-md;
    font-size: $font-size-sm;
    padding: $gap-sm / 2 $gap-sm;
  }
}
</style>
