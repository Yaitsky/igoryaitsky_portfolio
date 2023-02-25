<template>
  <div :class="`ui-title ${color} ${centered ? 'centered' : ''}`">
    <h1 v-if="type === 'title'">
      <slot />
    </h1>
    <h2 v-else-if="type === 'subtitle'">
      <slot />
    </h2>
    <h3 v-else>
      <slot />
    </h3>
  </div>
</template>

<script>
const types = ['title', 'subtitle', 'section']
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
    },
    centered: {
      type: Boolean,
      default: false
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

    @include tablets {
      font-size: 40px;
      line-height: 56px;
    }

    @include phones {
      font-size: 28px;
      line-height: 42px;
    }
  }

  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 48px;
    margin: 0;

    @include tablets {
      font-size: 28px;
      line-height: 42px;
    }

    @include phones {
      font-size: 24px;
      line-height: 36px;
    }
  }

  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 40px;
    margin: 0;

    @include tablets {
      font-size: 24px;
      line-height: 42px;
    }

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

  &.centered {
    text-align: center;
  }
}
</style>
