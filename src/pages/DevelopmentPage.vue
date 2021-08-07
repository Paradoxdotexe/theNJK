<template>
  <!-- BANNER -->
  <Banner graphics="Development">
    <template v-slot:title> Development<br /><span>Portfolio</span> </template>
    <template v-slot:content>
      <div class="banner__caption">
        Web development has become my personal outlet for creativity.
        It challenges me everyday to equally balance the weights of an intelligently-engineered system and a beautifully-designed website.
      </div>
    </template>
  </Banner>
  <!-- CONTENT -->
  <div class="content">
    <DevelopmentEntry
      v-for="entry of developmentEntries"
      :key="entry.content.key"
      :path="paths[entry.content.key]"
      :entry="entry"
    ></DevelopmentEntry>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue';
import Banner from '@/components/Banner.vue';
import DevelopmentEntry from '@/components/development/DevelopmentEntry.vue';
import DevelopmentEntries from '@/data/development';

export default defineComponent({
  name: 'DevelopmentPage',
  components: {
    Banner,
    DevelopmentEntry
  },
  setup() {
    const developmentEntries = DevelopmentEntries;
    const paths: { [key: string]: string } = {}; // header paths for development entries that begin a new year

    onBeforeMount(() => {
      const years: { [year: number]: boolean } = {};
      for (const entry of developmentEntries) {
        if (!years[entry.year]) {
          years[entry.year] = true;
          paths[entry.content.key] = `C:\\Users\\Nathan\\Development\\${entry.year}`;
        }
      }
    });

    return {
      developmentEntries,
      paths
    };
  }
});
</script>

<style lang="scss" scoped>
.banner__caption {
  @include mix-banner-caption;
}

.content {
  @include mix-content;
}
</style>
