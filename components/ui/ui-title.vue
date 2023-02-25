<template>
  <div :class="`ui-title ${color}`">
    <h1 v-if="type === 'title'">
      <slot />
    </h1>
    <h2 v-else>
      <slot />
    </h2>
  </div>
</template>

<script>
const types = ['title', 'subtitle']
const colors = ['text', 'caption']

export default {
  props: {
    type: {
      type: String,
      validator: value => types.includes(value),
      default: 'subtitle'
    },
    color: {
      type: String,
      validator: value => colors.includes(value),
      default: 'text'
    }
  }
}
</script>

<style scope lang="scss">
.ui-title {
  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 64px;
    margin: 0;

    @include phones {
      font-size: 32px;
      line-height: 48px;
    }
  }

  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 48px;
    margin: 0;

    @include phones {
      font-size: 24px;
      line-height: 36px;
    }
  }

  &.text {
    color: $text;
  }

  &.caption {
    color: $caption;
  }

  span.yellow {
    color: $yellow;
  }
}
</style>
