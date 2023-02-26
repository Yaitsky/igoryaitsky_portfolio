<template>
  <a :href="link" class="project-link" target="_blank">
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
