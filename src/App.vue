<template>
  <CoverController :cover-service="NavCoverService" />
  <Header />
  <router-view />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CoverController from '@/components/controllers/CoverController.vue';
import Header from '@/components/global/Header.vue';
import Footer from '@/components/global/Footer.vue';
import { NavCoverService } from "@/services/CoverService";

export default defineComponent({
  name: 'App',
  components: {
    CoverController,
    Header,
    Footer
  },
  setup() {
    return {
      NavCoverService
    }
  }
});
</script>

<style lang="scss" scoped>
#app {
  height: 100vh;
}
</style>
