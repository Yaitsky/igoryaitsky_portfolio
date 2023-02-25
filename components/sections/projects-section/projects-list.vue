<template>
  <ul class="projects-list">
    <li
      v-for="(project, index) in projects"
      :key="project.id"
      class="projects-list__item"
    >
      <project-item :project="project" />
      <ui-divider v-if="index !== projects.length - 1" />
    </li>
  </ul>
</template>

<script>
import ProjectItem from './projects-item'

export default {
  components: {
    ProjectItem
  },
  props: {
    projects: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.projects-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 128px;
  margin-top: 128px;

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 128px;

    &:nth-child(even) {
      .project-item {
        flex-direction: row-reverse;

        @include tablets {
          flex-direction: column;
        }

        @include phones {
          flex-direction: column;
        }
      }
    }
  }
}
</style>
