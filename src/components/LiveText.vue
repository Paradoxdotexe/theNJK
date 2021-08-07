<template>
  <div class="live-text">
    <pre>{{ refs.text }}</pre>
    <div class="live-text__cursor" v-bind:class="{ flash: refs.flash }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from 'vue';
import Sleep from '@/util/Sleep';

const textOptions: string[] = [
  'See my work',
  'See what I do',
  'See how I think',
  'See where I shine',
  'See my passion',
  'See my skills'
];

export default defineComponent({
  name: 'LiveText',
  setup() {
    const refs = reactive({
      text: '',
      flash: false
    });
    let nextText = '';
    let remainingTextOptions: string[] = [];
    const baseDuration = 150;

    onMounted(() => {
      refs.text = getRandomText();
      pause(baseDuration * 10).then(changeText);
    });

    async function changeText() {
      nextText = getRandomText();
      // delete characters until prefixes match
      while (refs.text !== nextText.slice(0, refs.text.length)) {
        refs.text = refs.text.slice(0, refs.text.length - 1);
        await Sleep(baseDuration);
      }
      await Sleep(baseDuration * 4); // sleep between deleting and adding characters
      // add characters until text is fully updated
      while (refs.text !== nextText) {
        refs.text += nextText[refs.text.length];
        await Sleep(baseDuration);
      }
      pause(baseDuration * 20).then(changeText); // pause before changing text again
    }

    function getRandomText(): string {
      // refresh text options
      if (remainingTextOptions.length === 0) {
        remainingTextOptions = [...textOptions];
      }
      // get random text in remaining text options
      const index = Math.floor(Math.random() * remainingTextOptions.length);
      const newText = remainingTextOptions[index];
      remainingTextOptions.splice(index, 1);
      return newText;
    }

    async function pause(duration: number) {
      refs.flash = true;
      await Sleep(duration);
      refs.flash = false;
    }

    return {
      refs
    };
  }
});
</script>

<style lang="scss" scoped>
.live-text {
  position: relative;
  padding-right: 4px;

  pre {
    margin: 0;
    font-family: $font-family-secondary;
    font-size: $font-size-xl;
    font-weight: 300;
  }

  .live-text__cursor {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 2px;
    background: $color-primary;

    &.flash {
      animation: flash 1.25s ease infinite;
    }
  }
}

@keyframes flash {
  from {
    opacity: 1;
  }
  47.5% {
    opacity: 1;
  }
  52.5% {
    opacity: 0;
  }
  to {
    opacity: 0;
  }
}

@media (min-width: $breakpoint-md) {
  .live-text pre {
    font-size: $font-size-xxl;
  }
}
</style>
