<template>
  <router-link
    v-for="button in buttons"
    :key="button.label"
    class="header__button-wrapper"
    :to="{ name: button.route }"
    v-slot="{ navigate }"
    tabindex="-1"
  >
    <button class="header__button" @click="navigate()" v-ripple>{{ button.label }}</button>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderButtons',
  setup() {
    const buttons = [
      { label: 'Home', route: 'Home' },
      { label: 'Development', route: 'Development' },
      { label: 'Design', route: 'Design' }
    ];

    return {
      buttons
    };
  }
});
</script>

<style lang="scss" scoped>
.header__button-wrapper {
  text-decoration: none;

  .header__button {
    @include mix-header-button;
  }

  &.router-link-active > .header__button {
    background: rgba(0, 0, 0, 0.2);
  }
}
</style>
