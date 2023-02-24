<template>
  <div class="app">
    <ui-logotype />
    <div style="margin-top: 24px;">
      <img src="~/assets/images/avatar.png" width="320">
    </div>
    <h1>
      Hello World!
    </h1>
    <h2>
      by Igor Yaitsky
    </h2>
    <div>
      <img src="~/assets/images/divider_skate.png" height="36" style="margin-top: 24px;">
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style scoped lang="scss">
.app {
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: $bg-gradient;

  h1 {
    font-family: "Days One";
    color: $text;
  }

  h2 {
    font-family: 'Gotham';
    color: $caption;
  }
}
</style>
