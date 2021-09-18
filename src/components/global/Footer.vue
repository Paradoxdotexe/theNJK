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
            <a href="https://github.com/IamParadoxdotexe"><Icon name="GitHub" /></a>
            <a href="https://www.linkedin.com/in/thenjk/"><Icon name="LinkedIn" /></a>
            <a href="https://www.instagram.com/nathan_paradox/"><Icon name="Instagram" /></a>
          </div>
        </div>
        <div class="footer__links">
          <div>Menu</div>
          <router-link
            v-for="button of NavButtons"
            :key="button.route"
            :to="{ name: button.route }"
            >{{ button.label }}</router-link
          >
        </div>
      </div>
      <div class="footer__copyright">© 2021 Nathan J Klingensmith.</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Icon from '@/components/icons/Icon.vue';
import { NavButtons } from '@/components/global/HeaderButtons.vue';

export default defineComponent({
  name: 'Footer',
  components: {
    Icon
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

            &:focus {
              color: var(--accent-primary);
              background: none;
            }
          }
        }
      }

      .footer__links {
        display: flex;
        flex-direction: column;

        div {
          font-size: $font-size-lg;
          font-weight: bold;
        }

        a {
          margin-top: $gap-sm;
          color: var(--color-secondary);
          text-decoration: none;

          &:focus {
            color: var(--accent-primary);
            background: none;
            text-decoration: underline;
          }
        }
      }
    }

    .footer__copyright {
      text-align: center;
    }
  }
}

@media (min-width: $breakpoint-md) {
  .footer .footer__framework {
    .footer__top {
      margin-bottom: unset;
      justify-content: flex-start;

      .footer__links {
        margin-left: $gap-xl * 3;
      }
    }

    .footer__copyright {
      text-align: right;
    }
  }
}
</style>
