<template>
  <transition name="cover">
    <div v-if="refs.visible" class="cover" @click="onClick()"></div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType } from 'vue';
import CoverService from '@/services/CoverService';

export default defineComponent({
  name: 'CoverController',
  props: {
    coverService: {
      type: Object as PropType<CoverService>,
      required: true
    }
  },
  setup(props) {
    const refs = reactive({
      visible: props.coverService.getVisibleRef()
    });

    function onClick() {
      props.coverService.removeCover();
    }

    return {
      refs,
      onClick
    };
  }
});
</script>

<style lang="scss" scoped>
.cover-enter-active,
.cover-leave-active {
  transition: opacity $transition-duration $transition-timing;
}

.cover-enter-from,
.cover-leave-to {
  opacity: 0 !important;
}

.cover {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: scale-color(var-dark('background-primary'), $alpha: -50%);
  opacity: 1;
  z-index: 500;
}
</style>
