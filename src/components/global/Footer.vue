<template>
  <div class="footer">
    <div class="footer__framework">
      <div class="footer__top">
        <div class="footer__brand">
          <div class="footer__logo">
            <Icon name="NJK" />
          </div>
          <div class="footer__slogan">
            Developer by design.<br />
            Designer by necessity.
          </div>
          <div class="footer__media">
            <a href="https://github.com/IamParadoxdotexe" target="_blank"><Icon name="GitHub" /></a>
            <a href="https://www.linkedin.com/in/thenjk/" target="_blank"><Icon name="LinkedIn" /></a>
            <a href="https://www.instagram.com/nathan_paradox/" target="_blank"><Icon name="Instagram" /></a>
          </div>
        </div>
        <div class="footer__links">
          <div class="links__header">Menu</div>
          <router-link
            v-for="button of NavButtons"
            :key="button.route"
            :to="{ name: button.route }"
            >{{ button.label }}
          </router-link>
        </div>
        <div class="footer__links">
          <div class="links__header">Contact</div>
          <CopyLink>paradoxpyt@gmail.com</CopyLink>
        </div>
      </div>
      <div class="footer__copyright">Copyright © 2022 Nathan J Klingensmith.</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Icon from '@/components/icons/Icon.vue';
import { NavButtons } from '@/components/global/HeaderButtons.vue';
import CopyLink from "@/components/CopyLink.vue";

export default defineComponent({
  name: 'Footer',
  components: {
    Icon,
    CopyLink
  },
  setup() {
    return {
      NavButtons
    };
  }
});
</script>

<style lang="scss" scoped>
.footer {
  @include mix-shadow-up;
  background: var(--background-primary);
  z-index: 1000;
  padding: $gap-lg 0;
  display: flex;
  justify-content: center;

  .footer__framework {
    @include mix-framework-extended;
    display: flex;
    flex-direction: column;

    .footer__top {
      margin-bottom: $gap-xl;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      gap: $gap-xl;

      .footer__brand {
        display: flex;
        flex-direction: column;

        .footer__logo {
          width: $gap-xl * 3;
          height: $gap-xl * 1.5;
          margin-bottom: $gap-sm;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .footer__slogan {
          color: var(--color-secondary);
          margin-bottom: $gap-md;
        }

        .footer__media {
          display: flex;

          a {
            color: var(--color-primary);
            width: $font-size-xxl;
            height: $font-size-xxl;

            &:not(:last-child) {
              margin-right: $gap-sm;
            }

            &:focus,
            &:hover {
              color: var(--accent-primary);
              background: none;
            }
          }
        }
      }

      .footer__links {
        position: relative;
        display: flex;
        flex-direction: column;

        .links__header {
          font-size: $font-size-lg;
          font-weight: bold;
        }

        a {
          margin-top: $gap-sm;
          color: var(--color-secondary);
          text-decoration: none;

          &:focus,
          &:hover {
            color: var(--accent-primary);
            background: none;
            text-decoration: underline;
          }
        }
      }
    }
  }
}

@media (min-width: $breakpoint-md) {
  .footer .footer__framework {
    .footer__top {
      margin-bottom: unset;
      justify-content: flex-start;
      flex-direction: row;
      gap: $gap-xl * 3;
    }

    .footer__copyright {
      text-align: right;
    }
  }
}
</style>
