<template>
  <div class="ui-logotype" @click="goToMain">
    <img src="~/assets/logo/logotype.png" alt="Igor Yaitsky Logotype">
  </div>
</template>

<script>
export default {
  methods: {
    goToMain () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
.ui-logotype {
  cursor: pointer;

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
