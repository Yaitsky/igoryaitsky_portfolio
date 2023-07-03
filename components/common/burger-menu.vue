<template>
  <transition name="fade">
    <div v-if="showMenu" class="burger-menu">
      <div class="burger-menu__header">
        <ui-logotype />
        <ui-icon-button icon="close" @click="closeMenu" />
      </div>

      <div class="burger-menu__container">
        <div class="burger-menu__nav" @click="closeMenu">
          <nav-menu />
        </div>

        <div class="burger-menu__contacts">
          <contact-links />
          <social-links />
        </div>
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
  methods: {
    closeMenu () {
      this.$store.commit('toggleMenu', false)
    }
  }
}
</script>

<style lang="scss">
.burger-menu {
  background: $dark;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  box-shadow: 0px 0px 64px 48px rgba($dark, 0.75);
  z-index: 100;
  border-bottom: 1px solid $bg;

  &__header {
    display: flex;
    justify-content: space-between;
  }

  &__container {
    padding: 24px 0;
    display: flex;
    flex-direction: column;
    gap: 32px;
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

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
}
</style>
