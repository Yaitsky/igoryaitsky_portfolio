<template>
  <div class="project-instruments">
    <ui-text color="yellow" class="project-instruments__title">
      Используемые инструменты
    </ui-text>

    <div class="project-instruments__content">
      <ui-tag v-for="item in project.instruments" :key="item" type="gray">
        {{ item }}
      </ui-tag>
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
.project-instruments {
  display: flex;
  flex-direction: column;
  gap: 24px;

  @include phones {
    gap: 16px;
  }

  &__content {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

    @include phones {
      gap: 8px;
    }
  }
}
</style>
