<template>
  <div class="project-title">
    <div class="project-title__logo">
      <img
        :src="require(`~/assets/projects/logos/${project.id}.png`)"
        :alt="project.title"
      >
    </div>
    <ui-title type="section">
      {{ project.title }}
    </ui-title>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.project-title {
  display: flex;
  align-items: center;
  gap: 16px;

  @include phones {
    gap: 12px;
  }

  &__logo {
    img {
      height: 40px;

      @include phones {
        height: 32px;
      }
    }
  }
}
</style>
