<template>
  <div class="project-details">
    <div class="project-details__info">
      <project-title class="project-details__title" :project="project" />
      <ui-text>
        {{ project.quote }}
      </ui-text>
      <ui-text class="project-details__years" color="yellow">
        {{ project.years }}
      </ui-text>
      <ui-text color="caption">
        Статус: {{ project.status }}
      </ui-text>
      <project-link v-if="project.link" class="project-details__link" :link="project.link" />
      <project-tags class="project-details__tags" :project="project" />
    </div>
    <div class="project-details__image">
      <img
        :src="require(`~/assets/projects/thumbs/thumb_${project.id}_${project.main_image}.png`)"
        :alt="project.title"
      >
    </div>
  </div>
</template>

<script>
import ProjectTitle from './project-title'
import ProjectLink from './project-link'
import ProjectTags from './project-tags'

export default {
  components: {
    ProjectTitle,
    ProjectLink,
    ProjectTags
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.project-details {
  display: flex;
  justify-content: space-between;
  gap: 64px;

  @include tablets {
    gap: 48px;
  }

  @include phones {
    flex-direction: column-reverse;
    align-items: center;
    gap: 48px;
  }

  &__image {
    img {
      height: 320px;
      pointer-events: none;

      @include tablets {
        height: 280px;
      }

      @include phones {
        height: 240px;
      }
    }
  }

  &__title {
    margin-bottom: 24px;

    @include phones {
      margin-bottom: 16px;
    }
  }

  &__years {
    margin: 12px 0;

    @include phones {
      margin: 8px 0;
    }
  }

  &__link {
    display: block;
    margin-top: 12px;

    @include phones {
      margin-top: 8px;
    }
  }

  &__tags {
    margin-top: 24px;

    @include phones {
      margin-top: 16px;
    }
  }
}
</style>
