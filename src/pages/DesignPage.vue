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
      <div
        v-for="(entryRow, i) of refs.entryRows"
        :key="i"
        class="design-entries__cards"
        :style="{ 'grid-template-columns': getTemplateColumns(entryRow) }">
        <DesignCard
          v-for="entry of entryRow"
          :key="entry.key"
          :entry="entry"
          class="design-entries__card"
        />
      </div>
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
      maxWidth: 1
    });

    onBeforeMount(() => {
      calculateEntryRows();
      window.addEventListener('resize', () => calculateEntryRows());
    });

    function calculateEntryRows() {
      const newMaxWidth = window.innerWidth < parseInt(exports.breakpointXS) ? 1 :
        (window.innerWidth < parseInt(exports.breakpointMD) ? 2 : 3);
      if (newMaxWidth !== refs.maxWidth) {
        refs.maxWidth = newMaxWidth;
        refs.entryRows = [];
        const entries = [...DesignEntries];
        while (entries.length > 0) {
          // create new row
          refs.entryRows.push([entries[0]]);
          if (entries[0].width < refs.maxWidth) {
            // find complementary entry based on width and height
            for (let i = 1; i < entries.length; i++) {
              if (entries[i].width + entries[0].width === refs.maxWidth && entries[i].height === entries[0].height) {
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
    }

    function getTemplateColumns(entryRow: DesignEntry[]) {
      return entryRow.reduce((prev, curr) => prev + `${ curr.width * 3 / refs.maxWidth }fr `, '')
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

    .design-entries__cards {
      display: grid;
      grid-gap: $gap-lg;

      &:not(:last-child) {
        margin-bottom: $gap-lg;
      }
    }
  }
}
</style>
