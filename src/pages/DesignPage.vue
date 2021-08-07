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
      <div class="design-entries__cards">
        <DesignCard
          v-for="entry of DesignEntries"
          :key="entry.key"
          :entry="entry"
          class="design-entries__card"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Banner from '@/components/Banner.vue';
import ContentHeader from '@/components/ContentHeader.vue';
import DesignCard from '@/components/design/DesignCard.vue';
import DesignEntries from '@/data/design';

export default defineComponent({
  name: 'DesignPage',
  components: {
    Banner,
    ContentHeader,
    DesignCard
  },
  setup() {
    return {
      DesignEntries
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
      display: flex;
      flex-wrap: wrap;

      .design-entries__card {
        margin-bottom: $gap-lg;

        &:nth-child(2n - 1) {
          margin-right: $gap-lg;
        }
      }
    }
  }
}
</style>
