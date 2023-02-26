<template>
  <button class="ui-icon-button" @click.stop="$emit('click')">
    <ui-icon :icon="icon" />
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.ui-icon-button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}
</style>
