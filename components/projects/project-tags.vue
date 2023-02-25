<template>
  <ul class="project-tags">
    <li v-for="tag in project.tags" :key="tag.label" class="project-tags__item">
      <ui-tag :type="tag.type">
        {{ tag.label }}
      </ui-tag>
    </li>
  </ul>
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
.project-tags {
  display: flex;
  align-items: center;
  gap: 16px;

  @include phones {
    gap: 8px;
  }
}
</style>
