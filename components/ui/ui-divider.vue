<template>
  <div :class="`ui-divider ui-divider--${type}`">
    <img :src="require(`~/assets/images/divider_${type}.png`)" alt="Divider">
  </div>
</template>

<script>
const types = ['line', 'skate', 'chess', 'brush']

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

  &--brush {
    img {
      height: 32px;
      opacity: 0.8;

      @include phones {
        height: 20px;
      }
    }
  }

  &--skate,
  &--chess {
    img {
      height: 48px;

      @include phones {
        height: 36px;
      }
    }
  }

  &--brush {
    animation: brush 2s ease-in-out 0s infinite reverse backwards;
  }

  &--skate {
    animation: skate 10s ease-in-out 0s infinite normal forwards;
  }

  &--chess {
    animation: chess 2s ease-in-out 0s infinite normal forwards;
  }
}

@keyframes skate {
  0%,
  100% {
    transform: translateX(0);
  }

  10%,
  30%,
  50%,
  70% {
    transform: translateX(-10px);
  }

  20%,
  40%,
  60% {
    transform: translateX(10px);
  }

  80% {
    transform: translateX(8px);
  }

  90% {
    transform: translateX(-8px);
  }
}

@keyframes chess {
  0% {
    transform: translate(0);
  }

  20% {
    transform: translate(2px, -2px);
  }

  40% {
    transform: translate(2px, 2px);
  }

  60% {
    transform: translate(-2px, 2px);
  }

  80% {
    transform: translate(-2px, -2px);
  }

  100% {
    transform: translate(0);
  }
}

@keyframes brush {
  0%,
  100% {
    transform: translateY(0) rotate(0);
    transform-origin: 50% 50%;
  }

  15% {
    transform: translateY(-12px) rotate(-3.5deg);
  }

  30% {
    transform: translateY(10px) rotate(3.5deg);
  }

  45% {
    transform: translateY(-10px) rotate(-3deg);
  }

  60% {
    transform: translateY(7px) rotate(2deg);
  }

  75% {
    transform: translateY(-4px) rotate(-1.2deg);
  }
}
</style>
