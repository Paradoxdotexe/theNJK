<template>
  <div
    class="carousel"
    :style="{
      background: Array.isArray(content.color)
        ? `linear-gradient(to right, ${content.color[0]}, ${content.color[1]})`
        : content.color
    }"
  >
    <div class="carousel__framework">
      <div
        class="carousel__objects-container"
        v-bind:class="{ mobile: content.type === ContentType.MOBILE }"
      >
        <div class="carousel__objects" :style="{ 'margin-left': `-${computes.offset}%` }">
          <template v-if="content.type === ContentType.WEB">
            <WebMockup
              v-for="(path, i) of paths"
              :key="i"
              :path="path"
              class="carousel__object"
              v-bind:class="{ active: i === refs.index }"
              @click="goToObject(i)"
            />
          </template>
          <template v-else>
            <img
              v-for="(path, i) of paths"
              :key="i"
              :ref="`object${i}`"
              class="carousel__object"
              v-bind:class="{ active: i === refs.index }"
              :src="path"
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
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, onBeforeMount, reactive, computed } from 'vue';
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
    const refs = reactive({
      index: 0
    });
    const computes = reactive({
      offset: computed(() => refs.index * 100 * 2)
    });
    const paths: string[] = [];

    onBeforeMount(() => {
      for (let i = 0; i < props.content.count; i++) {
        paths.push(require(`@/assets/content/development/${props.content.key}/_${i}.png`));
      }
    });

    function goToObject(index: number) {
      refs.index += index - refs.index;
    }

    return {
      refs,
      computes,
      paths,
      goToObject,
      ContentType
    };
  }
});
</script>

<style lang="scss" scoped>
$dot-size: $gap-sm * 1.5;

.carousel {
  @include mix-framework-container;
  @include mix-shadow;
  padding: var(--carousel-padding) 0;
  overflow: hidden;
  --carousel-padding: #{$gap-lg};

  .carousel__framework {
    @include mix-framework;
    display: flex;
    justify-content: center;

    .carousel__objects-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;

      &.mobile {
        max-width: 342px;
      }

      .carousel__objects {
        width: 100%;
        display: flex;
        transition: margin-left $transition-timing $transition-duration;

        .carousel__object {
          min-width: 100%;
          filter: drop-shadow(0 $shadow-offset $shadow-blur $shadow-color);
          transition: all $transition-timing $transition-duration;

          &:not(.active) {
            opacity: 0.25;
            cursor: pointer;
            transform: scale(0.85);
          }
        }
      }

      .carousel__dots {
        margin-top: calc(var(--carousel-padding) - #{$dot-size} * 0.5);
        display: flex;

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
}

@media (min-width: $breakpoint-lg) {
  .carousel {
    --carousel-padding: #{$gap-xl};
  }
}
</style>
