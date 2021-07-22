<template>
  <svg
    viewBox="0 0 24 24"
    :aria-labelledby="name"
    fill="currentColor"
    stroke="none"
    style="fill-rule: evenodd"
  >
    <title lang="en">{{ name }} Icon</title>
    <component v-bind:is="iconComponent"></component>
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import IconMenu from '@/components/icons/IconMenu.vue';
import IconNJK from '@/components/icons/IconNJK.vue';

export default defineComponent({
  name: 'Icon',
  components: {
    IconMenu,
    IconNJK
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
