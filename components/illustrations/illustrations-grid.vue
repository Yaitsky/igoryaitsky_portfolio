<template>
  <div class="illustrations-grid">
    <ul class="illustrations-grid__list">
      <li
        v-for="item in sortedIllustrations"
        :key="item.file"
        class="illustrations-grid__item"
        @click="activeImage = item"
      >
        <img
          :alt="labels[item.type]"
          :src="require(`~/assets/illustrations/thumbs/${item.thumb}`)"
        >
        <div v-if="$mq === 'desktop'" class="illustrations-grid__item-overlay">
          <ui-text type="small">
            {{ labels[item.type] }}
          </ui-text>
        </div>
      </li>
    </ul>

    <illustration-modal
      :active="activeImage"
      :labels="labels"
      @close="activeImage = null"
    />
  </div>
</template>

<script>
import IllustrationModal from './illustration-modal'

const labels = {
  pastel: 'Рисунок пастелью',
  gouache: 'Рисунок гуашью'
}

export default {
  components: {
    IllustrationModal
  },
  props: {
    illustrations: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      activeImage: null,
      labels
    }
  },
  computed: {
    sortedIllustrations () {
      return [...this.illustrations].reverse()
    }
  }
}
</script>

<style lang="scss">
.illustrations-grid {
  width: 100%;

  &__list {
    width: 100%;
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(4, 1fr);
    font-size: 0;

    @include tablets {
      grid-template-columns: repeat(3, 1fr);
    }

    @include phones {
      gap: 1px;
    }
  }

  &__item {
    position: relative;

    img {
      width: 100%;
      height: auto;
    }

    &:hover {
      cursor: pointer;

      .illustrations-grid__item-overlay {
        display: flex;
      }
    }

    &-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 10;
      display: none;
      align-items: center;
      justify-content: center;
      background-color: rgba($dark, 0.5);
    }
  }
}
</style>
