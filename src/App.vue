<template>
  <CoverController />
  <Header />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CoverController from '@/components/controllers/CoverController.vue';
import Header from '@/components/global/Header.vue';

export default defineComponent({
  name: 'App',
  components: {
    CoverController,
    Header
  }
});
</script>

<style lang="scss" scoped>
#app {
  height: 100vh;
}
</style>
