<template>
  <div class="details">
    <div v-for="side of ['left', 'right']" :key="side" class="details__items">
      <div
        v-for="key of refs[side]"
        :key="key"
        class="details__item"
        v-bind:class="`${key}_${side}`"
      >
        <div v-if="details[key]" class="item__title">// {{ key.toUpperCase() }}</div>
        <a v-if="key === 'demo'" class="item__content" target="_blank" :href="details[key]">{{ details[key] }}</a>
        <div v-else-if="!Array.isArray(details[key])" class="item__content">{{ details[key] }}</div>
        <div v-else class="item__list">
          <div v-for="(li, i) of details[key]" :key="i">{{ li }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue';
import { DevelopmentEntryDetails } from '@/data/development';

export default defineComponent({
  name: 'EntryDetails',
  props: {
    details: {
      type: Object as PropType<DevelopmentEntryDetails>,
      required: true
    }
  },
  setup(props) {
    const refs = reactive({
      left: ['client', 'role', 'technologies', 'demo'],
      right: ['platform', 'work', 'technologies', 'demo']
    });

    return {
      props,
      refs
    };
  }
});
</script>

<style lang="scss" scoped>
.details {
  @include mix-card;
  display: flex;
  flex-direction: column;
  margin-top: $gap-xl;

  .details__items {
    display: flex;
    flex-direction: column;

    .details__item {
      &:not(:last-child) {
        margin-bottom: $gap-md;
      }

      &.technologies_left, &.demo_left {
        display: none;
      }

      .item__title {
        font-family: $font-family-secondary;
        color: var(--color-secondary);
        margin-bottom: $gap-sm * 0.5;
      }

      .item__list {
        border-left: 1px solid var(--color-secondary);
        padding-left: $gap-sm;
        margin: $gap-sm 0 0 $gap-sm;
      }
    }
  }
}

@media (min-width: $breakpoint-md) {
  .details {
    flex-direction: row;

    .details__items {
      &:first-child {
        width: 30%;
      }

      &:last-child {
        width: 70%;
      }

      .details__item {
        &.technologies_left, &.demo_left {
          display: unset;
        }

        &.technologies_right, &.demo_right {
          display: none;
        }
      }
    }
  }
}
</style>
