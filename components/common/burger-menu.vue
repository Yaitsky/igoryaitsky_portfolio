<template>
  <transition name="menu">
    <div v-if="$mq === 'mobile' && showMenu" class="burger-menu">
      <div class="burger-menu__header">
        <ui-logotype />
        <ui-icon-button icon="close" @click="closeMenu" />
      </div>

      <div class="burger-menu__nav" @click="closeMenu">
        <nav-menu />
      </div>

      <div class="burger-menu__contacts">
        <contact-links />
        <social-links />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  computed: {
    showMenu () {
      return this.$store.state.showMenu
    }
  },
  mounted () {
    window.addEventListener('click', this.outsideClickHandler)
  },
  methods: {
    closeMenu () {
      this.$store.commit('toggleMenu', false)
    },
    outsideClickHandler (e) {
      if (!this.$el.contains(e.target)) {
        this.closeMenu()
      }
    }
  }
}
</script>

<style lang="scss">
.burger-menu {
  background: $dark;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  box-shadow: 0px 0px 96px 64px rgba($dark, 0.75);

  &__header {
    display: flex;
    justify-content: space-between;
  }

  &__nav {
    .nav-menu__list {
      flex-direction: column;
      gap: 24px;

      .ui-text.small {
        font-size: 16px;
      }
    }
  }

  &__contacts {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 24px;
    padding: 16px 0 24px;
  }
}

.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.3s ease-out;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}
</style>
