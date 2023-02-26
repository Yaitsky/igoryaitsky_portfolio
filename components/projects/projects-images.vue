<template>
  <div class="project-images">
    <ui-text class="project-images__title" color="yellow">
      Галерея
    </ui-text>

    <div class="project-images__swiper">
      <client-only>
        <Flicking
          :options="swiperOptions"
          :hide-before-init="true"
          :first-panel-size="'50%'"
        >
          <div
            v-for="number in project.images"
            :key="number"
            style="margin: 0 8px;"
            class="panel"
          >
            <img
              class="project-images__image"
              :src="
                require(`~/assets/projects/images/${project.id}_${number}.png`)
              "
            >
          </div>
        </Flicking>
      </client-only>
    </div>
  </div>
</template>

<script>
import { Flicking } from '@egjs/vue-flicking'

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
      swiperOptions: {
        circular: true,
        margin: { left: 10, right: 10 }
      }
    }
  }
}
</script>

<style lang="scss">
.project-images {
  display: flex;
  flex-direction: column;
  gap: 24px;

  @include phones {
    gap: 16px;
  }

  &__swiper {
    width: 100%;
  }

  &__image {
    height: 350px;
    pointer-events: none;
    border: 1px solid rgba($yellow, 0.75);
    border-radius: 8px;

    @include phones {
      height: 240px;
      max-width: calc(100vh - 32px);
    }
  }
}
</style>
