<template>
  <div class="ui-loader">
    <ui-logo />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.ui-loader {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background: $bg-gradient;
  display: flex;
  align-items: center;
  justify-content: center;

  .ui-logo {
    img {
      height: 80px;
      animation: loader 2s ease-in-out 0s infinite normal backwards;

      @include phones {
        height: 64px;
      }
    }
  }
}

@keyframes loader {
  0%,
  100% {
    transform: rotate(0deg);
    transform-origin: 50% 100%;
  }

  10% {
    transform: rotate(2deg);
  }

  20%,
  40%,
  60% {
    transform: rotate(-4deg);
  }

  30%,
  50%,
  70% {
    transform: rotate(4deg);
  }

  80% {
    transform: rotate(-2deg);
  }

  90% {
    transform: rotate(2deg);
  }
}
</style>
