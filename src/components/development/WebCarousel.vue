<template>
  <div class="carousel">
    <div class="carousel__objects-container" :style="{ height: `${refs.objectHeight}px` }">
      <div class="carousel__objects" :style="{ left: `-${refs.offset}px` }">
        <WebMockup
          class="carousel__object"
          v-bind:class="{ active: i === refs.index }"
          v-for="(path, i) of paths"
          :key="i"
          :path="path"
          :ref="`object${i}`"
          @click="goToObject(i)" />
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
import { DevelopmentEntryContent } from "@/data/development";
import WebMockup from '@/components/development/WebMockup.vue';

export default defineComponent({
  name: "DevelopmentEntry",
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
      objectHeight: computed(() => object0.value ? object0.value.$el.offsetHeight : 0),
      objectWidth: computed(() => object0.value ? object0.value.$el.offsetWidth : 0),
      index: 0,
      offset: computed(() => refs.index * refs.objectWidth)
    });
    const paths: string[] = [];

    onBeforeMount(() => {
      for (let i = 0; i < props.content.count; i++) {
        paths.push(`/${props.content.key}/_${i}.png`);
      }
    });

    function goToObject(index: number) {
      refs.index += index - refs.index;
    }

    return {
      object0,
      refs,
      paths,
      goToObject
    }
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
  background: linear-gradient(to right, #10af59, #1a7bbe);
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
        @include mix-shadow-down;
        transition: all $transition-timing $transition-duration;

        &:not(.active) {
          opacity: 0.25;
          cursor: pointer;
          transform: scale(0.85)
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
