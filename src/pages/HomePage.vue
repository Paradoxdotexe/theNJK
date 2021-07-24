<template>
  <Header />
  <!-- BANNER -->
  <Banner graphics="Home">
    <template v-slot:title>
      Developer by design.<br>Designer by <span>necessity</span>.
    </template>
    <template v-slot:content>
      <LiveText />
      <div class="banner__buttons">
        <button class="banner__button banner__button--primary" v-ripple @click="goToPortfolio(0)">Dev Portfolio</button>
        <button class="banner__button banner__button--secondary" v-ripple @click="goToPortfolio(1)">Design Portfolio</button>
      </div>
    </template>
  </Banner>
  <!-- CONTENT -->
  <div class="content">
    <ContentHeader
      path="C:\Users\Nathan\README.md"
      title="Hello, I'm Nathan Klingensmith"
    >
      I am a UI/UX designer, full stack developer, and team leader.
      I have the skills to take your idea from <router-link :to="{ name: 'Design' }">design</router-link> to <router-link :to="{ name: 'Development' }">development</router-link> to finished product.
    </ContentHeader>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import LiveText from "@/components/LiveText.vue";
import ContentHeader from "@/components/ContentHeader.vue";
import router from "@/router";

export default defineComponent({
  name: "HomePage",
  components: {
    Header,
    Banner,
    LiveText,
    ContentHeader
  },
  setup() {
    function goToPortfolio(n: number) {
      router.push({ name: n ? 'Design': 'Development' })
    }

    return {
      goToPortfolio
    }
  }
});
</script>

<style lang="scss" scoped>
.banner__buttons {
  margin-top: $gap-xl;
  display: flex;

  .banner__button--primary {
    @include mix-basic-button--raised($accent-primary);
    @include mix-focus-background($accent-secondary);
    margin-right: $gap-xl;
  }

  .banner__button--secondary {
    @include mix-basic-button--stroked($accent-primary);
    @include mix-focus-background(scale-color($accent-primary, $alpha: -85%));
  }

  .banner__button {
    padding: $gap-md $gap-xl;
  }
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
