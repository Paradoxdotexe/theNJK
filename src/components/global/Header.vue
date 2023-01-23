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
        <button class="header__button--contact" v-ripple @click="connect">Connect</button>
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
  <!-- CONNECT MENU -->
  <transition name="menu">
    <div v-if="refs.connectMenuShown" class="connect-menu">
      <div class="connect-menu__framework">
        <div class="connect-menu__title">
          Let's stay connected!
          <button @click="connect" class="connect-menu__exit" v-ripple>
            <Icon name="Cancel" />
          </button>
        </div>
        <CopyLink class="connect-menu__link">
          <Icon name="Email" />
          nathan@thenjk.com
        </CopyLink>
        <a class="connect-menu__link" href="https://www.linkedin.com/in/thenjk/" target="_blank">
          <Icon name="LinkedIn" />
          linkedin.com/in/theNJK
        </a>
        <a class="connect-menu__link" href="https://github.com/IamParadoxdotexe" target="_blank">
          <Icon name="GitHub" />
          github.com/IamParadoxdotexe
        </a>
        <a class="connect-menu__link" href="https://www.instagram.com/nathan_paradox/" target="_blank">
          <Icon name="Instagram" />
          instagram.com/nathan_paradox
        </a>
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
import CopyLink from "@/components/CopyLink.vue";

export default defineComponent({
  name: 'Header',
  components: {
    Icon,
    HeaderButtons,
    CopyLink
  },
  setup() {
    const refs = reactive({
      drawerOpen: false,
      connectMenuShown: false
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

    function connect() {
      refs.connectMenuShown = !refs.connectMenuShown;
      if (refs.connectMenuShown) {
        CoverService.addCover('#45c463', focusListener).then(() => (refs.connectMenuShown = false));
      } else {
        CoverService.removeCover();
      }
    }

    const focusListener = (e: Event) => {
      const className = (e.target as HTMLElement).classList[0];
      if (!className || !className.startsWith('connect-menu')) {
        CoverService.removeCover();
      }
    }

    return {
      refs,
      toggleDrawer,
      goHome,
      connect
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

.connect-menu {
  z-index: 1000;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 1;
  transition: opacity $transition-duration $transition-timing;

  &.menu-enter-from,
  &.menu-leave-to {
    opacity: 0 !important;
  }

  .connect-menu__framework {
    position: relative;
    padding: ($gap-xl * 1.25) $gap-xl;
    border-radius: $gap-md;
    background: var(--background-primary);
    pointer-events: all;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 380px;

    .connect-menu__title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: $font-size-xxl;
      font-weight: 500;
      margin-bottom: $gap-sm;
      margin-top: -$gap-sm;

      .connect-menu__exit {
        @include mix-button;
        margin-right: -$gap-sm;
        padding: $gap-sm;
        border-radius: $gap-sm;

        &:focus, &:hover {
          background: var(--background-tertiary);
        }

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }

    .connect-menu__link {
      display: flex;
      align-items: center;
      gap: $gap-sm;
      color: var(--color-primary);
      text-decoration: none;

      svg {
        width: 26px;
        height: 26px;
      }

      &:focus,
      &:hover {
        color: var(--accent-primary);
        background: none;
        text-decoration: underline;
      }
    }
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
