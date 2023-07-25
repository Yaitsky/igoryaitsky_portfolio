<template>
  <div class="books-message">
    <ui-title>
      🤓
    </ui-title>
    <ui-text type="small">
      А еще я очень люблю все структурировать и составлять списки.
      Ну а где вести списки, если уж не на своей страничке в интернете
    </ui-text>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.books-message {
  display: flex;
  align-items: center;
  gap: 24px;
  background-color: $card-bg;
  padding: 16px 24px;
  border-radius: 16px;

  .ui-text.small {
    line-height: 24px;

    @include phones {
      line-height: 20px;
    }
  }

  @include phones {
    gap: 16px;
    padding: 12px 16px;
  }
}
</style>
