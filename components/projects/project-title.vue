<template>
  <div class="project-title" @click="$emit('click')">
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
  cursor: pointer;

  @include tablets {
    gap: 12px;
  }

  @include phones {
    gap: 8px;
  }

  &__logo {
    img {
      height: 40px;

      @include tablets {
        height: 32px;
      }

      @include phones {
        height: 28px;
      }
    }
  }
}
</style>
