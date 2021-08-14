<template>
  <div class="design-card">
    <div
      class="design-card__image"
      :style="{ left: `-${refs.index * 100}%` }"
      @click="goToNextObject()"
    >
      <img v-for="(path, i) of paths" :key="i" :src="path" alt="" />
      <div
        class="design-card__dots"
        v-if="paths.length > 1"
        :style="{ left: `${refs.index * 100}%` }"
      >
        <div
          v-bind:class="{ active: i === refs.index }"
          v-for="i of [...Array(paths.length).keys()]"
          :key="i"
          @click="goToObject(i - 1)"
        />
      </div>
    </div>
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
import { defineComponent, PropType, onBeforeMount, reactive } from 'vue';
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
    const refs = reactive({
      index: 0
    });
    const paths: string[] = [];

    onBeforeMount(() => {
      for (let i = 0; i < props.entry.contentCount; i++) {
        paths.push(RequireImage(`/design/${props.entry.key}/_${i}`));
      }
    });

    function goToObject(index: number) {
      refs.index = index;
    }

    function goToNextObject() {
      refs.index = refs.index === paths.length - 1 ? 0 : refs.index + 1;
    }

    return {
      props,
      refs,
      paths,
      goToObject,
      goToNextObject
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

  &:hover {
    box-shadow: 0 $shadow-offset $shadow-blur rgb(0, 0, 0, $shadow-intensity * 3);
    transform: translateY(-#{$gap-sm});
  }

  .design-card__image {
    position: relative;
    left: 0;
    width: 100%;
    transition: left $transition-duration $transition-timing;
    cursor: pointer;
    display: flex;

    img {
      min-width: 100%;
    }

    .design-card__dots {
      @include mix-dots;
      position: absolute;
      left: 0;
      width: 100%;
      bottom: $gap-md;
      transition: left $transition-duration $transition-timing;
    }
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
