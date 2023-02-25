<template>
  <div :id="`swiper-${project.id}`" class="project-swiper">
    <client-only>
      <Flicking
        :options="{ circular: true }"
        :hide-before-init="true"
        :first-panel-size="'200px'"
        :plugins="plugins"
      >
        <div v-for="number in project.thumbs" :key="number" class="panel">
          <img
            class="project-swiper__image"
            :src="
              require(`~/assets/projects/thumbs/thumb_${project.id}_${number}.png`)
            "
          >
        </div>
      </Flicking>

      <div class="flicking-pagination" />
    </client-only>
  </div>
</template>

<script>
import { Flicking } from '@egjs/vue-flicking'
import { Pagination } from '@egjs/flicking-plugins'

export default {
  components: {
    Flicking
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      plugins: null
    }
  },
  mounted () {
    this.plugins = [
      new Pagination({
        type: 'bullet',
        parentEl: document.getElementById(`swiper-${this.project.id}`)
      })
    ]
  }
}
</script>

<style lang="scss">
.project-swiper {
  width: 400px;
  position: relative;

  @include phones {
    width: calc(100vw - 32px);
    max-width: 400px;
  }

  &__image {
    width: 400px;
    pointer-events: none;

    @include phones {
      width: calc(100vw - 32px);
      max-width: 400px;
    }
  }
}
</style>
