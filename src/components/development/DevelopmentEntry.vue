<template>
  <ContentHeader :path="path" :title="entry.title" :subtitle="entry.subtitle" />
  <Carousel :content="entry.content"></Carousel>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { DevelopmentEntry } from '@/data/development';
import ContentHeader from '@/components/ContentHeader.vue';
import Carousel from '@/components/development/Carousel.vue';

export default defineComponent({
  name: 'DevelopmentEntry',
  components: {
    ContentHeader,
    Carousel
  },
  props: {
    path: {
      type: String,
      default: undefined
    },
    entry: {
      type: Object as PropType<DevelopmentEntry>,
      required: true
    }
  },
  setup(props) {
    return {
      props
    };
  }
});
</script>

<style lang="scss" scoped></style>
