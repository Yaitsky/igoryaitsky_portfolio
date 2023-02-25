<template>
  <div :class="`ui-divider ui-divider--${type}`">
    <img :src="require(`~/assets/images/divider_${type}.png`)" alt="Divider">
  </div>
</template>

<script>
const types = ['line', 'skate', 'chess']

export default {
  props: {
    type: {
      type: String,
      validator: value => types.includes(value),
      default: 'line'
    }
  }
}
</script>

<style lang="scss">
.ui-divider {
  &--line {
    img {
      height: 12px;
    }
  }

  &--skate, &--chess {
    img {
      height: 48px;

      @include phones {
        height: 36px;
      }
    }
  }
}
</style>
