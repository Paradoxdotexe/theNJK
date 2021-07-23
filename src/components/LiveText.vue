<template>
  <div class="live-text">
    <pre>{{ refs.text }}</pre>
    <div class="live-text__cursor" v-bind:class="{ 'flash': refs.flash }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from 'vue';
import Sleep from "@/util/Sleep";

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
    const baseDuration = 200;
    // const usedTextOptions: string[] = [];

    onMounted(() => {
      refs.text = getRandomText();
      pause(baseDuration * 8).then(changeText);
    });

    async function changeText() {
      nextText = getRandomText();
      // delete characters until prefixes match
      while(refs.text !== nextText.slice(0, refs.text.length)) {
        refs.text = refs.text.slice(0, refs.text.length - 1);
        await Sleep(baseDuration);
      }
      await Sleep(baseDuration * 3); // sleep between deleting and adding characters
      // add characters until text is fully updated
      while (refs.text !== nextText) {
        refs.text += nextText[refs.text.length];
        await Sleep(baseDuration);
      }
      pause(baseDuration * 15).then(changeText); // pause before changing text again
    }

    function getRandomText(): string {
      let newText = refs.text;
      while (newText == refs.text) {
        newText = textOptions[Math.round(Math.random() * (textOptions.length - 1))];
      }
      return newText;
    }

    async function pause(duration: number) {
      refs.flash = true;
      await Sleep(duration);
      refs.flash = false;
    }

    return {
      refs
    }
  }
});
</script>

<style lang="scss" scoped>
  .live-text {
    position: relative;
    padding-right: 4px;

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
</style>
