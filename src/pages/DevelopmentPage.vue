<template>
  <Header />
  <!-- BANNER -->
  <Banner graphics="Development">
    <template v-slot:title>
      Development<br><span>Portfolio</span>
    </template>
    <template v-slot:content>
      <div class="banner__caption">
        Web development has become my personal outlet for creativity.<br>
        It challenges me everyday to equally balance the weights of an intelligently-engineered system and a beautifully-designed website.
      </div>
    </template>
  </Banner>
  <!-- CONTENT -->
  <div class="content">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";

export default defineComponent({
  name: "DevelopmentPage",
  components: {
    Header,
    Banner
  },
  setup() {
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
