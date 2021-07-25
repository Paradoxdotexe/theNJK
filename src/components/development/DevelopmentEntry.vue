<template>
  <ContentHeader
    :path="path"
    :title="entry.title"
    :subtitle="entry.subtitle"
  />
  <WebCarousel v-if="isContentType('WEB')" :content="entry.content"></WebCarousel>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import{ DevelopmentEntry, ContentType } from "@/data/development";
import ContentHeader from "@/components/ContentHeader.vue";
import WebCarousel from "@/components/development/WebCarousel.vue";

export default defineComponent({
  name: "DevelopmentEntry",
  components: {
    ContentHeader,
    WebCarousel
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
    function isContentType(type: ContentType) {
      return props.entry.content.type === type;
    }

    return {
      props,
      isContentType
    }
  }
});
</script>

<style lang="scss" scoped>

</style>
