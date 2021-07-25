<template>
  <div class="carousel">
    <WebMockup :path="paths[0]" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, onBeforeMount } from 'vue';
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
    const paths: string[] = [];

    onBeforeMount(() => {
      for (let i = 0; i < props.content.count; i++) {
        paths.push(`/${props.content.key}/_${i}.png`);
      }
    });

    return {
      paths
    }
  }
});
</script>

<style lang="scss" scoped>
.carousel {
  @include mix-shadow;
  width: 100%;
  background: linear-gradient(to right, #10af59, #1a7bbe);
  display: flex;
  justify-content: center;
  padding: $gap-xl 0;
}
</style>
