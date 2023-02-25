<template>
  <header class="page-header">
    <ui-logotype />
    <nav-menu v-if="$mq !== 'mobile'" />
    <burger-menu v-else />
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.page-header {
  padding: 32px 0;
  display: flex;
  justify-content: space-between;

  @include tablets {
    padding: 24px 0;
  }

  @include phones {
    padding: 16px 0;
  }
}
</style>
