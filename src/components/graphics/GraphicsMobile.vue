<template>
  <svg viewBox="0 0 280 180" aria-label="graphical elements">
    <component v-bind:is="graphicsComponent"></component>
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import GraphicsMobileHome from '@/components/graphics/GraphicsMobileHome.vue';
import GraphicsMobileDevelopment from '@/components/graphics/GraphicsMobileDevelopment.vue';
import GraphicsMobileDesign from '@/components/graphics/GraphicsMobileDesign.vue';

export default defineComponent({
  name: 'Icon',
  components: {
    GraphicsMobileHome,
    GraphicsMobileDevelopment,
    GraphicsMobileDesign
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup(props) {
    let graphicsComponent = computed(() => `GraphicsMobile${props.name}`);

    return {
      graphicsComponent
    };
  }
});
</script>
