<template>
  <!-- BANNER -->
  <Banner graphics="Home">
    <template v-slot:title>
      Developer by design.<br />Designer by <span>necessity</span>.
    </template>
    <template v-slot:content>
      <LiveText />
      <div class="banner__buttons">
        <button class="banner__button primary" v-ripple @click="goToPortfolio(0)">
          Dev Portfolio
        </button>
        <button class="banner__button secondary" v-ripple @click="goToPortfolio(1)">
          Design Portfolio
        </button>
      </div>
    </template>
  </Banner>
  <!-- CONTENT -->
  <div class="content">
    <div class="content__framework">
      <!-- EXPERIENCE -->
      <ContentHeader path="C:\Users\Nathan\Experience.json" title="Experience">
        My name is Nathan Klingensmith. I am a UI/UX designer, full stack developer, and team leader. I have the skills to take your
        idea from <router-link :to="{ name: 'Design' }">design</router-link> to
        <router-link :to="{ name: 'Development' }">development</router-link> to finished product.
        Over my career, I have worked in the following roles, utilizing my skills to create unique
        value for all the teams I have worked on.
      </ContentHeader>
      <div class="content__roles">
        <ContentCard
          v-for="(role, i) of Roles"
          :key="i"
          :title="role.title"
          :subtitle="role.company"
          :tag="
            Array.isArray(role.years)
              ? `${Math.min(...role.years)} - ${Math.max(...role.years)}`
              : `${role.years}`
          "
        ></ContentCard>
      </div>

      <!-- EDUCATION -->
      <ContentHeader path="C:\Users\Nathan\WPI\Education.zip" title="Education">
        I am pursuing a BS in <strong>Computer Science</strong> and minor in
        <strong>Interactive Media & Game Development</strong> from Worcester Polytechnic Institute
        (WPI). To date, I have completed the below courses with an esteemed
        <strong>3.97 GPA</strong> (4.0 major/minor GPA).
      </ContentHeader>
      <ExpansionPanel
        v-for="type of ['CS', 'IMGD', 'DESIGN']"
        :key="type"
        :title="`${CourseType[type]} Courses`"
        class="content__courses-container"
      >
        <div class="content__courses">
          <ContentCard
            v-for="course of getCourses(CourseType[type])"
            :key="course.code"
            :title="course.title"
            :subtitle="course.code"
            :tag="course.grade"
          ></ContentCard>
        </div>
      </ExpansionPanel>

      <!-- SKILLS -->
      <ContentHeader path="C:\Users\Nathan\WPI\Skills.json" title="Skills">
        From my personal, professional, and academic experience, I have accumulated a number of skills in both the design and devlopment space.
      </ContentHeader>
      <div class="content__skills">
        <ContentCard
          v-for="(skill, i) of Skills"
          :key="i"
          :title="skill.technologies"
          :subtitle="skill.type"
          :tag="`${skill.years} years`"
        ></ContentCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Banner from '@/components/Banner.vue';
import LiveText from '@/components/LiveText.vue';
import ContentHeader from '@/components/ContentHeader.vue';
import ContentCard from '@/components/ContentCard.vue';
import ExpansionPanel from '@/components/ExpansionPanel.vue';
import router from '@/router';
import Roles from '@/data/roles';
import Courses, { CourseType } from '@/data/courses';
import Skills from '@/data/skills';

export default defineComponent({
  name: 'HomePage',
  components: {
    Banner,
    LiveText,
    ContentHeader,
    ContentCard,
    ExpansionPanel
  },
  setup() {
    function goToPortfolio(n: number) {
      router.push({ name: n ? 'Design' : 'Development' });
    }

    function getCourses(courseType: CourseType) {
      return Courses.filter(c => c.type === courseType);
    }

    return {
      Roles,
      Skills,
      goToPortfolio,
      getCourses,
      CourseType
    };
  }
});
</script>

<style lang="scss" scoped>
.banner__buttons {
  margin-top: $gap-xl * 2;
  display: flex;
  flex-direction: column;
  align-items: center;

  .banner__button {
    padding: $gap-md $gap-xl !important;
    width: 100%;

    &.primary {
      @include mix-basic-button--raised(var(--accent-primary));
      @include mix-focus-background(var(--accent-secondary));
      margin-bottom: $gap-lg;
    }

    &.secondary {
      @include mix-basic-button--stroked(var(--accent-primary));
      @include mix-focus-background(scale-color(var-dark('accent-primary'), $alpha: -85%));
    }
  }
}

@media (min-width: $breakpoint-sm) {
  .banner__buttons {
    margin-top: $gap-xl;
    flex-direction: row;

    .banner__button {
      width: unset;

      &.primary {
        margin-right: $gap-xl;
        margin-bottom: unset;
      }
    }
  }
}

.content {
  @include mix-framework-container;

  .content__framework {
    @include mix-framework;

    .content__roles {
      display: grid;
      grid-template-columns: minmax(0, $card-width);
      grid-gap: $gap-md;
    }

    .content__courses-container {
      &:not(:last-child) {
        margin-bottom: $gap-lg;
      }

      .content__courses {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(0, $card-width));
        grid-gap: $gap-md;
      }
    }

    .content__skills {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(0, $card-width));
      grid-gap: $gap-md;
    }
  }
}
</style>
