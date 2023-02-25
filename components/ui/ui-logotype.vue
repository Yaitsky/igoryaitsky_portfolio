<template>
  <div class="ui-logotype">
    <img src="~/assets/logo/logotype.png" alt="Igor Yaitsky Logotype">
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.ui-logotype {
  img {
    height: 32px;
  }

  @include phones {
    img {
      height: 24px;
    }
  }
}
</style>
