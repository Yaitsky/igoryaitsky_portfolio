<template>
  <div class="project-description">
    <ui-text color="yellow" class="project-description__title">
      Описание
    </ui-text>

    <div class="project-description__content">
      <ui-text
        v-for="text in project.description_full"
        :key="text"
        class="project-description__text"
        color="caption"
      >
        {{ text }}
      </ui-text>
    </div>
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
.project-description {
  display: flex;
  flex-direction: column;
  gap: 24px;

  @include phones {
    gap: 16px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 16px;

    @include phones {
      gap: 8px;
    }
  }
}
</style>
