<template>
  <div class="project-item">
    <div class="project-item__info">
      <project-title
        class="project-item__title"
        :project="project"
        @click="goToProject"
      />
      <ui-text color="yellow">
        {{ project.years }}
      </ui-text>
      <ui-text class="project-item__description">
        {{ project.description_short }}
      </ui-text>
      <project-tags :project="project" />
      <ui-button
        class="project-item__button"
        after-icon="arrow-small"
        @click="goToProject"
      >
        Подробнее
      </ui-button>
    </div>
    <project-swiper :project="project" />
  </div>
</template>

<script>
import ProjectTitle from '@/components/projects/project-title'
import ProjectTags from '@/components/projects/project-tags'
import ProjectSwiper from '@/components/projects/project-swiper'

export default {
  components: {
    ProjectTitle,
    ProjectTags,
    ProjectSwiper
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToProject () {
      this.$router.push(`projects/${this.project.id}`)
    }
  }
}
</script>

<style lang="scss">
.project-item {
  display: flex;
  align-items: center;
  gap: 128px;

  @include tablets {
    flex-direction: column;
    gap: 32px;
  }

  @include phones {
    flex-direction: column;
    gap: 32px;
  }

  &__info {
    max-width: 448px;
  }

  &__title {
    margin-bottom: 16px;

    @include phones {
      margin-bottom: 12px;
    }
  }

  &__description {
    margin: 16px 0 24px;

    @include phones {
      margin: 12px 0 16px;
    }
  }

  &__button {
    margin-top: 36px;

    @include phones {
      margin-top: 24px;
    }
  }
}
</style>
