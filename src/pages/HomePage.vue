<template>
  <Header />
  <Banner graphics="Home">
    <template v-slot:title>
      Developer by design.<br>Designer by <span>necessity</span>.
    </template>
    <template v-slot:content>
      <div class="banner__live"><LiveText /></div>
    </template>
  </Banner>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import LiveText from "@/components/LiveText.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    Header,
    Banner,
    LiveText
  }
});
</script>

<style lang="scss" scoped>
.banner__live {
  font-family: $font-family-secondary;
  font-size: $font-size-xl;
  font-weight: 300;
}
</style>
