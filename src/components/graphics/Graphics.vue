<template>
  <svg
    viewBox="0 0 1200 400"
    aria-label="graphical elements"
  >
    <component v-bind:is="graphicsComponent"></component>
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import GraphicsHome from '@/components/graphics/GraphicsHome.vue';

export default defineComponent({
  name: 'Icon',
  components: {
    GraphicsHome
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup(props) {
    let graphicsComponent = computed(() => `Graphics${props.name}`);

    return {
      graphicsComponent
    };
  }
});
</script>
