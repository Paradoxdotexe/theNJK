<template>
  <div class="development-entry">
    <div class="development-entry__framework">
      <ContentHeader :path="path" :title="entry.title" :subtitle="entry.subtitle" />
    </div>
    <EntryCarousel :content="entry.content" />
    <div class="development-entry__framework">
      <EntryDetails :details="entry.details" />
    </div>
  </div>
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

<style lang="scss" scoped>
.development-entry {
  @include mix-framework-container;
  padding-bottom: 0;

  .development-entry__framework {
    @include mix-framework;
  }
}
</style>
