<template>
  <Header />
  <Banner graphics="Home">
    <template v-slot:title>
      Developer by design.<br>Designer by <span>necessity</span>.
    </template>
    <template v-slot:content>
      <div class="banner__live"><LiveText /></div>
      <div class="banner__buttons">
        <button class="banner__button banner__button--primary" v-ripple>Dev Portfolio</button>
        <button class="banner__button banner__button--secondary" v-ripple>Design Portfolio</button>
      </div>
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

.banner__buttons {
  margin-top: $gap-lg;
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
</style>
