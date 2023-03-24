<template>
  <footer class="page-footer">
    <ui-text type="small" class="designed-by">
      Created by Igor Yaitsky
    </ui-text>
    <ui-text type="small" color="caption">
      2023
    </ui-text>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.page-footer {
  background: $dark;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @include phones {
    padding: 16px 0;
  }

  .designed-by {
    margin-bottom: 8px;
  }
}
</style>
