<template>
  <div class="layout">
    <ui-loader v-if="loading" />

    <burger-menu v-if="$mq === 'mobile'" />

    <div v-show="!loading" class="layout__content" @click="closeBurgerMenu">
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
  },
  methods: {
    closeBurgerMenu () {
      if (this.$store.state.showMenu) {
        this.$store.commit('toggleMenu', false)
      }
    }
  }
}
</script>

<style lang="scss">
.layout {
  background-color: $bg;

  &__footer {
    margin-top: 144px;

    @include phones {
      margin-top: 128px;
    }
  }
}
</style>
