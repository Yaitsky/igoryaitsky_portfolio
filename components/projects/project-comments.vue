<template>
  <div class="project-comments">
    <ui-text class="project-comments__title" color="yellow">
      Мои комментарии
    </ui-text>

    <ul class="project-comments__list">
      <li v-for="comment in project.comments" :key="comment" class="project-comments__item">
        <div class="project-comments__dot" />
        <ui-text color="caption">
          {{ comment }}
        </ui-text>
      </li>
    </ul>
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
.project-comments {
  display: flex;
  flex-direction: column;
  gap: 24px;

  @include phones {
    gap: 16px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-left: 24px;

    @include phones {
      gap: 16px;
      padding-left: 0px;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 24px;

    @include phones {
      gap: 16px;
    }
  }

  &__dot {
    width: 12px;
    height: 12px;
    border-radius: 4px;
    background: $yellow;
    flex-shrink: 0;

    @include phones {
      width: 8px;
      height: 8px;
      border-radius: 2px;
    }
  }
}
</style>
