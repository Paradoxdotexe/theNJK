<template>
  <!-- BANNER -->
  <Banner graphics="Design">
    <template v-slot:title> Design<br /><span>Portfolio</span> </template>
    <template v-slot:content>
      <div class="banner__caption">
        Although I am by no means an artist, I have an eye for what looks good and what users think
        is functional, yet attractive. I have integrated this skill into how I design everything
        from websites to logos.
      </div>
    </template>
  </Banner>
  <!-- CONTENT -->
  <div class="design-entries">
    <div class="design-entries__framework">
      <ContentHeader path="C:\Users\Nathan\Design" title="Assorted Designs">
        Designs that I have done throughout my project career.
      </ContentHeader>
      <template v-for="(entryRows, i) of [refs.fullEntryRows, refs.partialEntryRows]" :key="i">
        <div
          v-for="(entryRow, i) of entryRows"
          :key="i"
          class="design-entries__grid"
          :style="{ 'grid-template-columns': getTemplateColumns(entryRow) }"
        >
          <DesignCard v-for="entry of entryRow" :key="entry.key" :entry="entry" />
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onBeforeMount } from 'vue';
import Banner from '@/components/Banner.vue';
import ContentHeader from '@/components/ContentHeader.vue';
import DesignCard from '@/components/design/DesignCard.vue';
import DesignEntries, { DesignEntry } from '@/data/design';
import exports from '@/styles/_exports.module.scss';

export default defineComponent({
  name: 'DesignPage',
  components: {
    Banner,
    ContentHeader,
    DesignCard
  },
  setup() {
    const refs = reactive({
      entryRows: [] as DesignEntry[][],
      fullEntryRows: [] as DesignEntry[][],
      partialEntryRows: [] as DesignEntry[][],
      minWidth: 0 // represents min sum of grid template column widths ex. 3 = 1fr 2fr, 2 = 1fr 1fr or 2fr, 1 = 1fr or 2fr
    });

    onBeforeMount(() => {
      calculateEntryRows();
      window.addEventListener('resize', () => calculateEntryRows());
    });

    const getRowWidth = (entryRow: DesignEntry[]): number => {
      return entryRow.reduce((width, entry) => width + entry.width, 0);
    };

    function calculateEntryRows() {
      // get min row width via exported breakpoints
      const newMinWidth =
        window.innerWidth < parseInt(exports.breakpointSM)
          ? 1
          : window.innerWidth < parseInt(exports.breakpointMD)
          ? 2
          : 3;

      if (newMinWidth !== refs.minWidth) {
        refs.minWidth = newMinWidth;
        refs.entryRows = [];
        const entries = [...DesignEntries];
        while (entries.length > 0) {
          // create new row
          refs.entryRows.push([entries[0]]);
          if (entries[0].width < refs.minWidth) {
            // find complementary entry based on width and height
            for (let i = 1; i < entries.length; i++) {
              if (
                entries[i].width + entries[0].width === refs.minWidth &&
                entries[i].height === entries[0].height
              ) {
                // add entry to row and delete from list of entries
                refs.entryRows[refs.entryRows.length - 1].push(entries[i]);
                entries.splice(i, 1);
                break;
              }
            }
          }
          // delete original entry from list of entries
          entries.splice(0, 1);
        }
      }

      // divide entry rows into full and partial
      refs.fullEntryRows = [];
      refs.partialEntryRows = [];
      refs.entryRows.forEach(entryRow => {
        if (getRowWidth(entryRow) >= refs.minWidth) {
          refs.fullEntryRows.push(entryRow);
        } else {
          refs.partialEntryRows.push(entryRow);
        }
      });
    }

    function getTemplateColumns(entryRow: DesignEntry[]) {
      // add filler column to partial entry rows
      const filler =
        refs.minWidth > getRowWidth(entryRow) ? `${refs.minWidth - getRowWidth(entryRow)}fr` : '';
      return entryRow.reduce((prev, curr) => prev + `${curr.width}fr `, '') + filler;
    }

    return {
      refs,
      getTemplateColumns
    };
  }
});
</script>

<style lang="scss" scoped>
.banner__caption {
  @include mix-banner-caption;
}

.design-entries {
  @include mix-framework-container;

  .design-entries__framework {
    @include mix-framework;
    display: flex;
    flex-direction: column;
    $grid-gap: $gap-lg;

    .design-entries__grid {
      display: grid;
      grid-gap: $grid-gap;

      &:not(:last-child) {
        margin-bottom: $grid-gap;
      }
    }
  }
}
</style>
