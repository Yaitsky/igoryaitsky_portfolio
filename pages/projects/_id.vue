<template>
  <div class="project-page">
    <ui-container>
      <page-header />
      <back-to-main />

      <div class="project-page__container">
        <div class="project-page__content">
          <project-details :project="project" />
          <project-description :project="project" />
          <project-comments :project="project" />
          <project-images v-show="showImages" :project="project" />
        </div>

        <ui-divider type="chess" />
      </div>
    </ui-container>
  </div>
</template>

<script>
import projects from '@/static/projects.json'
import ProjectDetails from '@/components/projects/project-details'
import ProjectDescription from '@/components/projects/project-description'
import ProjectComments from '@/components/projects/project-comments'
import ProjectImages from '@/components/projects/projects-images'

export default {
  components: {
    ProjectDetails,
    ProjectDescription,
    ProjectComments,
    ProjectImages
  },
  asyncData ({ params, redirect }) {
    const project = projects.find(p => p.id === params.id)

    if (project) {
      return {
        project
      }
    } else {
      redirect('/')
    }
  },
  data () {
    return {
      showImages: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.showImages = true
    }, 1000)
  }
}
</script>

<style lang="scss">
.project-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: $bg-gradient;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 96px;

    @include phones {
      margin-top: 64px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 64px;
    max-width: 900px;
    width: 900px;
    margin-bottom: 128px;

    @include tablets {
      width: 100%;
    }

    @include phones {
      gap: 48px;
      width: 100%;
      margin-bottom: 96px;
    }
  }
}
</style>
