<template>
  <button class="ui-button" @click="$emit('click')">
    <ui-icon v-if="beforeIcon" :icon="beforeIcon" color="yellow" />
    <ui-text>
      <slot />
    </ui-text>
    <ui-icon v-if="afterIcon" :icon="afterIcon" color="yellow" />
  </button>
</template>

<script>
export default {
  props: {
    beforeIcon: {
      type: String,
      default: null
    },
    afterIcon: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped lang="scss">
.ui-button {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}
</style>
