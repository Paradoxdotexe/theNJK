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
        <Draggable
          class="carousel__objects"
          :direction="Direction.X"
          :callback-prefix="refs.callbackPrefix"
          :dampen-end="refs.index === 0"
          :dampen-start="refs.index === paths.length - 1"
        >
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
        </Draggable>
        <div class="carousel__dots">
          <button
            v-bind:class="{ active: i === refs.index }"
            v-for="i of [...Array(paths.length).keys()]"
            :key="i"
            @click="goToObject(i)"
            :tabindex="i === refs.index ? -1 : 0"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, onBeforeMount, reactive, computed, onMounted } from 'vue';
import { ContentType, DevelopmentEntryContent } from '@/data/development';
import WebMockup from '@/components/development/WebMockup.vue';
import RequireImage from '@/util/RequireImage';
import Draggable from '@/components/Draggable.vue';
import { emitter } from '@/main';
import { Direction } from '@/types';

export default defineComponent({
  name: 'EntryCarousel',
  components: {
    WebMockup,
    Draggable
  },
  props: {
    content: {
      type: Object as PropType<DevelopmentEntryContent>,
      required: true
    }
  },
  setup(props) {
    const refs = reactive({
      index: 0,
      callbackPrefix: `${Math.random().toString().slice(2)}-carousel-draggable`
    });
    const computes = reactive({
      offset: computed(() => refs.index * 100 * 2)
    });
    const paths: string[] = [];

    onBeforeMount(() => {
      for (let i = 0; i < props.content.count; i++) {
        paths.push(RequireImage(`/development/${props.content.key}/_${i}`));
      }
    });

    onMounted(() => {
      emitter.on(`${refs.callbackPrefix}-end`, () => goToObject(refs.index - 1));
      emitter.on(`${refs.callbackPrefix}-start`, () => goToObject(refs.index + 1));
    });

    function goToObject(index: number) {
      refs.index = Math.max(Math.min(index, paths.length - 1), 0);
      emitter.emit(`${refs.callbackPrefix}-set-index`, refs.index);
    }

    return {
      refs,
      computes,
      paths,
      goToObject,
      ContentType,
      Direction
    };
  }
});
</script>

<style lang="scss" scoped>
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

        .carousel__object {
          min-width: 100%;
          filter: drop-shadow(0 $shadow-offset $shadow-blur * 0.5 rgb(0, 0, 0, $shadow-intensity));
          transition: all $transition-timing $transition-duration;

          &:not(.active) {
            opacity: 0.25;
            cursor: pointer;
            transform: scale(0.85);
          }
        }

        img {
          padding: 0 $gap-xl;
        }
      }

      .carousel__dots {
        @include mix-dots;
        margin-top: calc(var(--carousel-padding) - #{$dot-size} * 0.5);
      }
    }
  }
}

@media (max-width: $breakpoint-xs) {
  .carousel {
    .carousel__framework {
      padding: 0 $gap-md;
    }
  }
}

@media (min-width: $breakpoint-lg) {
  .carousel {
    --carousel-padding: #{$gap-xl};

    .carousel__framework .carousel__objects-container .carousel__objects img {
      padding: 0;
    }
  }
}
</style>
