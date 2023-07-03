<template>
  <span :class="`ui-tag ${type}`">
    <ui-text type="small" :color="type">
      <slot />
    </ui-text>
  </span>
</template>

<script>
const types = ['yellow', 'green', 'light-blue', 'coral', 'gray']

export default {
  props: {
    type: {
      type: String,
      validator: value => types.includes(value),
      default: 'yellow'
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-tag {
  padding: 8px 12px;
  border: 1px solid;
  border-radius: 8px;
  display: inline-block;

  @include phones {
    padding: 4px 8px;
  }

  &.yellow {
    border-color: $yellow;
  }

  &.green {
    border-color: $green;
  }

  &.light-blue {
    border-color: $light-blue;
  }

  &.coral {
    border-color: $coral;
  }

  &.gray {
    border-color: $gray;
  }
}
</style>
