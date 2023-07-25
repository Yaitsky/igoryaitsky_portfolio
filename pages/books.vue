<template>
  <div class="books-page">
    <ui-container>
      <page-header />
      <back-to-main />

      <div class="books-page__container">
        <div class="books-page__content">
          <div class="books-page__title">
            <ui-title centered>
              Прочитанные книги
            </ui-title>
            <ui-divider />
          </div>

          <books-list :books="books" />
        </div>
      </div>
    </ui-container>
  </div>
</template>

<script>
import books from '@/assets/books/books.json'

export default {
  data () {
    return {
      books
    }
  }
}
</script>

<style lang="scss">
.books-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: $bg-gradient;

  &__title {
    text-align: center;
  }

  &__container {
    display: flex;
    justify-content: center;
  }

  &__content {
    margin-top: 96px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 64px;
    max-width: 720px;

    @include phones {
      margin-top: 64px;
    }
  }
}
</style>
