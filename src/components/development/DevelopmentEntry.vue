<template>
  <ContentHeader :path="path" :title="entry.title" :subtitle="entry.subtitle" />
  <EntryCarousel :content="entry.content" />
  <EntryDetails :details="entry.details" />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { DevelopmentEntry } from '@/data/development';
import ContentHeader from '@/components/ContentHeader.vue';
import EntryCarousel from '@/components/development/EntryCarousel.vue';
import EntryDetails from '@/components/development/EntryDetails.vue';

export default defineComponent({
  name: 'DevelopmentEntry',
  components: {
    ContentHeader,
    EntryCarousel,
    EntryDetails
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
