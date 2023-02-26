<template>
  <span :class="`ui-icon ${color}`">
    <component :is="icon" />
  </span>
</template>

<script>
import BurgerMenu from '@/assets/icons/menu.svg'
import AngleLeft from '@/assets/icons/angle_left.svg'
import ArrowSmall from '@/assets/icons/arrow_small.svg'
import Close from '@/assets/icons/close.svg'
import Instagram from '@/assets/icons/instagram.svg'
import Vk from '@/assets/icons/vk.svg'
import Telegram from '@/assets/icons/telegram.svg'

const icons = [
  'burger-menu',
  'angle-left',
  'arrow-small',
  'close',
  'instagram',
  'vk',
  'telegram'
]
const colors = [
  'text',
  'caption',
  'yellow'
]

export default {
  components: {
    BurgerMenu,
    AngleLeft,
    ArrowSmall,
    Close,
    Instagram,
    Vk,
    Telegram
  },
  props: {
    icon: {
      type: String,
      validator: value => icons.includes(value),
      default: 'burger-menu'
    },
    color: {
      type: String,
      validator: value => colors.includes(value),
      default: 'caption'
    }
  }
}
</script>

<style lang="scss">
.ui-icon {
  svg {
    width: 24px;
    height: 24px;
  }

  &.caption {
    svg path {
      fill: $caption;
    }
  }

  &.text {
    svg path {
      fill: $text;
    }
  }

  &.yellow {
    svg path {
      fill: $yellow;
    }
  }
}
</style>
