<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :aria-labelledby="name"
    fill="currentColor"
    stroke="none"
    style="fill-rule: evenodd"
  >
    <title lang="en">{{ name }} icon</title>
    <component v-bind:is="iconComponent"></component>
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import IconNJK from '@/icons/IconNJK.vue';
import IconMenu from '@/icons/IconMenu.vue';

export default defineComponent({
  name: 'Icon',
  components: {
    IconNJK,
    IconMenu
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup(props) {
    let iconComponent = computed(() => `Icon${props.name}`);
    return {
      iconComponent
    };
  }
});
</script>
