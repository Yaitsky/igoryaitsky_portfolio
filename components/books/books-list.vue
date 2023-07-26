<template>
  <div class="books-list">
    <ul class="books-list__items">
      <li
        v-for="(book, index) in books"
        :key="`${book.title}_${book.author}`"
        class="books-list__item"
      >
        <div class="books-list__item-index">
          <ui-text>
            <span class="yellow">{{ index + 1 }}.</span>
          </ui-text>
        </div>
        <div class="books-list__item-text">
          <ui-text>
            {{ book.title }}. <span class="caption">{{ book.author }}</span>
          </ui-text>
          <div class="books-list__item-rating">
            <ui-text>
              {{ getRatingLabel(book.rating)
              }}<span class="grayscale">{{
                getRatingLabel(5 - book.rating)
              }}</span>
            </ui-text>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    books: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getRatingLabel (rating) {
      return new Array(rating).fill('🔸').join('').trim()
    }
  }
}
</script>

<style lang="scss">
.books-list {
  display: flex;
  flex-direction: column;
  gap: 48px;

  &__items {
    display: flex;
    flex-direction: column;
    gap: 24px;

    @include phones {
      gap: 16px;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 24px;

    @include phones {
      gap: 16px;
    }

    &-index {
      width: 32px;
    }

    &-text {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 32px;
      flex: 1;

      @include phones {
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
      }
    }

    &-rating {
      opacity: 0.75;

      span.grayscale {
        filter: grayscale(1) invert(3%) sepia(1%) saturate(513%) hue-rotate(314deg) brightness(75%) contrast(80%);
      }
    }
  }
}
</style>
