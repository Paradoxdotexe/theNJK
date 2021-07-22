<template>
  <div class="header">
    <div class="header__framework">
      <div class="header__left">
        <Icon name="NJK" /></div>
      <div class="header__middle">
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
      </div>
      <div class="header__right">
        <button class="header__button--contact" v-ripple>Contact</button>
        <button class="header__button--menu" v-ripple><Icon name="Menu" /></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Icon from "@/icons/Icon.vue";

export default defineComponent({
  name: 'Header',
  components: {
    Icon
  },
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
  $edge-item-width: $gap-xl * 3; // edge items must be same width to properly center nav buttons

  @mixin mix-button-nav {
    @include mix-button;
    @include mix-focus-background(rgba(255, 255, 255, 0.15));
    padding: 0 $gap-xl;
    height: 100%;
    letter-spacing: 0.02rem;

    svg {
      width: $gap-xl;
    }
  }

  @mixin mix-button-nav-active {
    background: rgba(255, 255, 255, 0.25);
    font-weight: 500;
  }

  .header {
    @include mix-shadow-down;
    background: $accent-primary;
    height: $gap-xl * 2;
    display: flex;
    justify-content: center;

    .header__framework {
      width: $framework-width-extended;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .header__left {
        margin-left: $gap-xl;

        svg {
          fill: $color-primary;
          width: $edge-item-width;
        }
      }

      .header__middle {
        display: none;
        height: 100%;

        .header__button-wrapper {
          text-decoration: none;

          .header__button {
            @include mix-button-nav;
          }

          &.router-link-active > .header__button {
            @include mix-button-nav-active;
          }
        }
      }

      .header__right {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .header__button--contact {
          @include mix-outline-button($color-primary);
          width: 100%;
          display: none;
        }

        .header__button--menu {
          @include mix-button-nav;
        }
      }
    }
  }

  @media (min-width: $breakpoint-md) {
    .header {
      .header__framework {
        .header__middle {
          display: flex;
        }

        .header__right {
          margin-right: $gap-xl;
          width: $edge-item-width;

          .header__button--contact {
            display: block;
          }

          .header__button--menu {
            display: none;
          }
        }
      }
    }
  }
</style>
