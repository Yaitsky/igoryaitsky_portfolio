<template>
  <div :class="`ui-text ${color} ${type}`">
    <slot />
  </div>
</template>

<script>
const types = ['body', 'small']
const colors = ['text', 'caption', 'yellow', 'green', 'blue', 'light-blue', 'coral', 'gray']

export default {
  props: {
    type: {
      type: String,
      validator: value => types.includes(value),
      default: 'body'
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
.ui-text {
  &.body {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;

    @include phones {
      font-size: 16px;
      line-height: 24px;
    }
  }

  &.small {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    @include phones {
      font-size: 14px;
      line-height: 18px;
    }
  }

  &.text {
    color: $text;
  }

  &.caption {
    color: $caption;
  }

  &.yellow {
    color: $yellow;
  }

  &.green {
    color: $green;
  }

  &.blue {
    color: $blue;
  }

  &.light-blue {
    color: $light-blue;
  }

  &.coral {
    color: $coral;
  }

  &.gray {
    color: $gray;
  }
}
</style>
