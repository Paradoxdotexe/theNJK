<template>
  <div class="header">
    <div></div>
    <div class="header__buttons">
      <router-link
        v-for="button in buttons"
        :key="button.label"
        class="header__button-link"
        :to="{ name: button.route }"
        v-slot="{ navigate }"
        tabindex="-1"
      >
        <button class="header__button" @click="navigate()" v-ripple>{{ button.label }}</button>
      </router-link>
    </div>
    <div></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  setup() {
    const buttons = [
      { label: 'Home', route: 'Home' },
      { label: 'Development', route: 'Development' },
      { label: 'Design', route: 'Design' }
    ]

    return {
      buttons
    }
  }
});
</script>

<style lang="scss" scoped>
  .header {
    @include mix-shadow-down;
    background: $accent-primary;
    width: 100%;
    height: 68px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header__buttons {
      display: flex;
      height: 100%;

      .header__button-link {
        text-decoration: none;

        .header__button {
          @include mix-button;
          @include mix-focus-background( rgba(255, 255, 255, 0.15));
          padding: 0 $gap-lg;
          height: 100%;
          letter-spacing: 0.02rem;
        }

        &.router-link-active > .header__button {
          background: rgba(255, 255, 255, 0.25);
          font-weight: 500;
        }
      }
    }
  }
</style>
