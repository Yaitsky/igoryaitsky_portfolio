<template>
  <section id="books" class="books-section">
    <div class="books-section__title">
      <ui-title centered>
        Прочитанные книги
      </ui-title>
      <ui-divider />
    </div>
    <div class="books-section__content">
      <books-message />
      <books-list :books="booksList" />
      <div class="books-section__button">
        <ui-button
          after-icon="arrow-small"
          @click="goToBooks"
        >
          Посмотреть все ({{ books.length }})
        </ui-button>
      </div>
    </div>
  </section>
</template>

<script>
import BooksMessage from '@/components/books/books-message'
import BooksList from '@/components/books/books-list'
import books from '@/assets/books/books.json'

export default {
  components: {
    BooksMessage,
    BooksList
  },
  data () {
    return {
      books
    }
  },
  computed: {
    booksList () {
      return this.books.slice(0, 10)
    }
  },
  methods: {
    goToBooks () {
      this.$router.push('books')
    }
  }
}
</script>

<style lang="scss">
.books-section {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 64px;
  max-width: 740px;

  &__title {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  @include phones {
    gap: 48px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }
}
</style>
