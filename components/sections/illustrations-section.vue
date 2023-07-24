<template>
  <section id="illustrations" class="illustrations-section">
    <div class="illustrations-section__title">
      <ui-title centered>
        Мои рисунки
      </ui-title>
      <ui-divider />
    </div>
    <illustrations-grid :illustrations="illustrations" />
  </section>
</template>

<script>
import IllustrationsGrid from '@/components/illustrations/illustrations-grid'
import illustrations from '@/assets/illustrations/illustrations.json'

export default {
  components: {
    IllustrationsGrid
  },
  data () {
    return {
      illustrations
    }
  }
}
</script>

<style lang="scss">
.illustrations-section {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 128px;

  &__title {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  @include phones {
    gap: 48px;
  }
}
</style>
