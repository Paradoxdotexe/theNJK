<template>
  <div class="content-card">
    <div class="content-card__title">{{ title }}</div>
    <div class="content-card__bottom">
      <div class="content-card__subtitle">{{ subtitle }}</div>
      <div class="content-card__tag">{{ tag }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContentHeader',
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
    };
  }
});
</script>

<style lang="scss" scoped>
.content-card {
  @include mix-card;
  position: relative;
  max-width: $card-width;
  height: min-content;
  line-height: 100%;

  .content-card__title {
    font-weight: 500;
    margin-bottom: $gap-sm * 0.5;
  }

  .content-card__bottom {
    margin-top: -$gap-sm;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .content-card__subtitle {
      color: $color-secondary;
      font-style: italic;
      margin-right: $gap-md;
    }

    .content-card__tag {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: auto;
      margin-right: -$gap-sm;
      line-height: 80%;
      background: $accent-primary;
      border-radius: $gap-md;
      font-size: $font-size-sm;
      padding: $gap-sm * 0.5 $gap-sm;
    }

    .content-card__subtitle,
    .content-card__tag {
      margin-top: $gap-sm;
    }
  }
}
</style>
