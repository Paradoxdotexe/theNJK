<template>
  <div class="design-card">
    <img :src="computes.path" />
    <div class="design-card__content">
      <div class="design-card__top">
        <div class="design-card__title">{{ entry.title }}</div>
        <div class="design-card__tag">{{ entry.format }}</div>
      </div>
      <div class="design-card__description">{{ entry.description }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, computed } from 'vue';
import { DesignEntry } from '@/data/design';
import RequireImage from '@/util/RequireImage';

export default defineComponent({
  name: 'DesignCard',
  props: {
    entry: {
      type: Object as PropType<DesignEntry>,
      required: true
    }
  },
  setup(props) {
    const computes = reactive({
      path: computed(() => (props.entry ? RequireImage(`/design/${props.entry.key}/_0`) : null))
    });

    return {
      props,
      computes
    };
  }
});
</script>

<style lang="scss" scoped>
.design-card {
  @include mix-card;
  padding: 0;
  overflow: hidden;
  transition: all $transition-duration $transition-timing;
  cursor: pointer;

  &:hover {
    box-shadow: 0 $shadow-offset $shadow-blur rgb(0, 0, 0, $shadow-intensity * 3);
    transform: translateY(-#{$gap-sm});
  }

  img {
    width: 100%;
  }

  .design-card__content {
    padding: $gap-sm $gap-md;
    display: flex;
    flex-direction: column;

    .design-card__top {
      margin-bottom: $gap-md;
      display: flex;
      justify-content: space-between;

      .design-card__tag {
        @include mix-card-tag;
        margin-left: $gap-sm;
      }
    }

    .design-card__description {
      color: $color-secondary;
    }
  }
}

@media (min-width: $breakpoint-md) {
  .design-card .design-card__bottom .design-card__title {
      font-size: $font-size-lg;
    }
  }
</style>
