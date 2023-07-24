<template>
  <ui-modal :show="!!active" @close="$emit('close')">
    <div v-if="active" class="illustration-modal">
      <img
        :alt="labels[active.type]"
        :src="require(`~/assets/illustrations/${active.file}`)"
      >
      <ui-text type="small">
        {{ labels[active.type] }}
      </ui-text>
    </div>
  </ui-modal>
</template>

<script>
export default {
  props: {
    active: {
      type: Object,
      default: () => null
    },
    labels: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
.illustration-modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  img {
    max-height: 80vh;
    max-width: 95vw;
  }
}
</style>
