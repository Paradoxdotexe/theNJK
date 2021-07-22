<template>
  <Header />
  <Banner graphics="Home">
    <template v-slot:title>
      Developer by design.<br>Designer by <span>necessity</span>.
    </template>
  </Banner>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    Header,
    Banner
  }
});
</script>

<style lang="scss" scoped>
</style>
