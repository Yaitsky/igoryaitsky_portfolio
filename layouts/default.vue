<template>
  <div class="layout">
    <ui-loader v-if="loading" />

    <burger-menu v-if="$mq === 'mobile'" />

    <div v-show="!loading" class="layout__content" @click="closeBurgerMenu">
      <Nuxt />
      <page-footer class="layout__footer" />
    </div>

    <portal-target name="portal" />
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
    setTimeout(() => {
      this.loading = false
    }, 800)
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
