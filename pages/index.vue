<template>
  <div class="main-page">
    <hello-section />

    <ui-container class="app-container">
      <ui-divider type="skate" />

      <projects-section />

      <!-- <ui-divider type="brush" />

      <illustrations-section /> -->

      <ui-divider type="chess" />

      <about-section />

      <ui-divider type="book" />

      <books-section />
    </ui-container>
  </div>
</template>

<script>
import HelloSection from '@/components/sections/hello-section'
import ProjectsSection from '@/components/sections/projects-section/projects-section'
// import IllustrationsSection from '@/components/sections/illustrations-section'
import AboutSection from '@/components/sections/about-section'
import BooksSection from '@/components/sections/books-section'

export default {
  components: {
    HelloSection,
    ProjectsSection,
    // IllustrationsSection,
    AboutSection,
    BooksSection
  }
}
</script>

<style scoped lang="scss">
.main-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-behavior: smooth;

  section {
    width: 100%;
  }

  .app-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 144px;
    align-items: center;
    margin-top: 144px;

    @include phones {
      gap: 128px;
      margin-top: 96px;
    }
  }
}
</style>
