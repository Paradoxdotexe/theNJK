<template>
  <div
    class="carousel"
    :style="{
      background: Array.isArray(content.color)
        ? `linear-gradient(to right, ${content.color[0]}, ${content.color[1]})`
        : content.color
    }"
  >
    <div
      class="carousel__objects-container"
      :style="{ height: `${refs.objectHeight}px`, width: `${refs.objectWidth}px` }"
    >
      <div class="carousel__objects" :style="{ left: `-${refs.offset}px` }">
        <template v-if="isContentType('WEB')">
          <WebMockup
            v-for="(path, i) of paths"
            :key="i"
            :path="path"
            :ref="`object${i}`"
            class="carousel__object"
            v-bind:class="{ active: i === refs.index }"
            @click="goToObject(i)"
          />
        </template>
        <template v-else>
          <div
            v-for="(path, i) of paths"
            :key="i"
            :ref="`object${i}`"
            class="carousel__object carousel__object--mobile"
            v-bind:class="{ active: i === refs.index }"
            :style="{ 'background-image': `url(${path})` }"
            @click="goToObject(i)"
          />
        </template>
      </div>
      <div class="carousel__dots">
        <div
          class="carousel__dot"
          v-bind:class="{ active: i === refs.index }"
          v-for="i of [...Array(paths.length).keys()]"
          :key="i"
          @click="goToObject(i)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, onBeforeMount, ref, reactive, computed } from 'vue';
import { ContentType, DevelopmentEntryContent } from '@/data/development';
import WebMockup from '@/components/development/WebMockup.vue';

export default defineComponent({
  name: 'EntryCarousel',
  components: {
    WebMockup
  },
  props: {
    content: {
      type: Object as PropType<DevelopmentEntryContent>,
      required: true
    }
  },
  setup(props) {
    const object0 = ref<any>();
    const refs: { [key: string]: any } = reactive({
      objectHeight: computed(() =>
        object0.value ? (object0.value.$el || object0.value).offsetHeight : 0
      ),
      objectWidth: computed(() =>
        object0.value ? (object0.value.$el || object0.value).offsetWidth : 0
      ),
      index: 0,
      offset: computed(() => refs.index * refs.objectWidth)
    });
    const paths: string[] = [];

    onBeforeMount(() => {
      for (let i = 0; i < props.content.count; i++) {
        paths.push(require(`@/assets/content/development/${props.content.key}/_${i}.png`));
      }
    });

    function isContentType(type: ContentType) {
      return props.content.type === type;
    }

    function goToObject(index: number) {
      refs.index += index - refs.index;
    }

    return {
      object0,
      refs,
      paths,
      isContentType,
      goToObject
    };
  }
});
</script>

<style lang="scss" scoped>
$carousel-padding: $gap-xl;
$dot-size: $gap-sm * 1.5;

.carousel {
  @include mix-shadow;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: $carousel-padding 0 $carousel-padding * 2;

  .carousel__objects-container {
    position: relative;
    width: $max-width;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    .carousel__objects {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      transition: left $transition-timing $transition-duration;

      .carousel__object {
        filter: drop-shadow(0 $shadow-offset $shadow-blur $shadow-color);
        transition: all $transition-timing $transition-duration;

        &:not(.active) {
          opacity: 0.25;
          cursor: pointer;
          transform: scale(0.85);
        }

        &.carousel__object--mobile {
          height: 670px;
          width: 342px;
        }
      }
    }

    .carousel__dots {
      display: flex;
      margin-bottom: -$carousel-padding - $dot-size * 0.5;

      .carousel__dot {
        background: $background-primary;
        width: $dot-size;
        height: $dot-size;
        border-radius: $gap-sm;
        opacity: 0.25;
        cursor: pointer;
        transition: opacity $transition-timing $transition-duration * 0.5;

        &:not(:last-child) {
          margin-right: $gap-sm;
        }

        &.active {
          opacity: 0.75;
          cursor: default;
        }
      }
    }
  }
}
</style>
