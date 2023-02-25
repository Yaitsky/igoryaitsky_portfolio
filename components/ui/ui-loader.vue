<template>
  <div class="ui-loader">
    <ui-logo />
  </div>
</template>

<script>
export default {

}
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

      @include phones {
        height: 64px;
      }
    }
  }
}
</style>
