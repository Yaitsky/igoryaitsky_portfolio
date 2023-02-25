<template>
  <a :href="link" class="project-link">
    <ui-text type="small" color="blue">
      {{ link }}
    </ui-text>
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    }
  }
}
</script>
