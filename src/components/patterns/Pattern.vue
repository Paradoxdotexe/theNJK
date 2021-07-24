<template>
  <svg width="100%" height="100%" aria-label="space effect">
    <defs>
      <pattern id="pattern" :width="size.toString()" :height="size.toString()" patternUnits="userSpaceOnUse">
        <component v-bind:is="patternComponent"></component>
      </pattern>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern)" />
  </svg>
</template>

<script>
import { computed } from "vue";
import PatternDot from "@/components/patterns/PatternDot";

export default {
  name: "Pattern",
  components: {
    PatternDot
  },
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    let patternComponent = computed(() => `Pattern${props.name}`);

    return {
      props,
      patternComponent
    };
  }
}
</script>

<style scoped>

</style>
