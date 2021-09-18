<template>
  <!-- HEADER -->
  <div class="header">
    <div class="header__framework">
      <div class="header__left">
        <Icon name="NJK" @click="goHome" />
      </div>
      <div class="header__middle">
        <HeaderButtons />
      </div>
      <div class="header__right">
        <button class="header__button--contact" v-ripple @click="contact()">Contact</button>
        <button class="header__button--menu" v-ripple @click="toggleDrawer">
          <Icon name="Menu" />
        </button>
      </div>
    </div>
  </div>
  <!-- HEADER DRAWER -->
  <transition name="drawer">
    <div v-if="refs.drawerOpen" class="header-drawer">
      <div class="header__framework">
        <HeaderButtons @navigate="toggleDrawer()" />
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, reactive, watch, onMounted } from 'vue';
import Icon from '@/components/icons/Icon.vue';
import HeaderButtons from '@/components/global/HeaderButtons.vue';
import CoverService from '@/services/CoverService';
import { useRoute } from 'vue-router';
import router from '@/router';

export default defineComponent({
  name: 'Header',
  components: {
    Icon,
    HeaderButtons
  },
  setup() {
    const refs = reactive({
      drawerOpen: false
    });

    watch(useRoute(), () => {
      if (refs.drawerOpen) {
        toggleDrawer();
      }
    });

    onMounted(() => {
      window.addEventListener('resize', onResize);
    });

    const onResize = () => {
      if (document.documentElement.clientWidth > 768 && refs.drawerOpen) {
        toggleDrawer();
      }
    };

    function toggleDrawer() {
      refs.drawerOpen = !refs.drawerOpen;
      if (refs.drawerOpen) {
        CoverService.addCover().then(() => (refs.drawerOpen = false));
      } else {
        CoverService.removeCover();
      }
    }

    function goHome() {
      router.push({ name: 'Home' });
    }

    function contact() {
      window.location.href = "mailto: njklingensmith@wpi.edu";
    }

    return {
      refs,
      toggleDrawer,
      goHome,
      contact
    };
  }
});
</script>

<style lang="scss" scoped>
$edge-item-width: $gap-xl * 3; // edge items must be same width to properly center nav buttons

@mixin mix-bar {
  @include mix-shadow-down;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: $header-height;
  display: flex;
  justify-content: center;
}

.header {
  @include mix-bar;
  background: var(--accent-primary);
  z-index: 1000;

  .header__framework {
    @include mix-framework-extended;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header__left {
      height: 100%;
      overflow: hidden;
      display: flex;
      align-items: center;

      svg {
        width: $edge-item-width;
        cursor: pointer;
      }
    }

    .header__middle {
      display: none;
      height: 100%;
    }

    .header__right {
      height: 100%;
      margin-right: -$framework-padding;
      display: flex;
      justify-content: center;
      align-items: center;

      .header__button--contact {
        @include mix-basic-button--stroked(var(--color-primary));
        @include mix-focus-background(rgba(0, 0, 0, 0.1));
        width: 100%;
        display: none;
      }

      .header__button--menu {
        @include mix-header-button;
      }
    }
  }
}

.header-drawer {
  @include mix-bar;
  top: $header-height;
  background: var(--background-tertiary);
  z-index: 999;
  transition: top $transition-duration $transition-timing;

  &.drawer-enter-from,
  &.drawer-leave-to {
    top: 0 !important;
  }

  .header__framework {
    @include mix-framework;
    display: flex;
    justify-content: center;
  }
}

@media (min-width: $breakpoint-md) {
  .header .header__framework {
    .header__middle {
      display: flex;
    }

    .header__right {
      width: $edge-item-width;
      margin-right: 0;

      .header__button--contact {
        display: block;
      }

      .header__button--menu {
        display: none;
      }
    }
  }
}
</style>
