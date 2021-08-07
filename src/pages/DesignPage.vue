<template>
  <!-- BANNER -->
  <Banner graphics="Design">
    <template v-slot:title> Design<br /><span>Portfolio</span> </template>
    <template v-slot:content>
      <div class="banner__caption">
        Although I am by no means an artist, I have an eye for what looks good and what users think
        is functional, yet attractive. I have integrated this skill into how I design everything
        from websites to logos.
      </div>
    </template>
  </Banner>
  <!-- CONTENT -->
  <div class="content"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Banner from '@/components/Banner.vue';

export default defineComponent({
  name: 'DesignPage',
  components: {
    Banner
  },
  setup() {}
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
