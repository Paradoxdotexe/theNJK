<template>
  <div class="design-card">
    <img :src="computes.path" />
    <div class="design-card__bottom">
      <div class="design-card__title">{{ entry.title }}</div>
      <div class="design-card__format">// {{ entry.format }}</div>
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

  .design-card__bottom {
    padding: $gap-sm $gap-md;
    display: flex;
    justify-content: space-between;

    .design-card__title {
      font-size: $font-size-xl;
    }

    .design-card__format {
      font-family: $font-family-secondary;
      color: $color-secondary;
    }
  }
}
</style>
