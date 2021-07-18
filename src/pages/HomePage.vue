<template>
  <Header />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from "@/components/Header.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    Header
  }
});
</script>

<style lang="scss" scoped>

</style>
