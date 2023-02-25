<template>
  <div class="layout">
    <ui-loader v-if="loading" />

    <div v-show="!loading" class="layout__content">
      <!-- <page-header /> -->
      <Nuxt />
      <page-footer class="layout__footer" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: true
    }
  },
  mounted () {
    window.addEventListener('load', () => {
      this.loading = false
    })
  }
}
</script>

<style lang="scss">
.layout {
  &__footer {
    margin-top: 144px;

    @include phones {
      margin-top: 96px;
    }
  }
}
</style>
