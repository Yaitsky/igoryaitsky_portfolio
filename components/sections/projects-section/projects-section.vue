<template>
  <section id="projects" class="projects-section">
    <ui-title centered class="projects-section__title">
      Мои проекты
    </ui-title>
    <ui-divider />
    <projects-list :projects="projects" />
  </section>
</template>

<script>
import ProjectsList from './projects-list'
import projects from '@/assets/projects.json'

export default {
  components: {
    ProjectsList
  },
  data () {
    return {
      projects
    }
  }
}
</script>

<style lang="scss">
.projects-section {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
