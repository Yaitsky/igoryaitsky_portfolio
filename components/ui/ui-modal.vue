<template>
  <portal to="portal">
    <transition name="fade">
      <div v-if="show" class="ui-modal">
        <div class="ui-modal__overlay" @click="$emit('close')" />
        <div class="ui-modal__wrapper">
          <div class="ui-modal__content">
            <slot />
          </div>
        </div>

        <div class="ui-modal__close">
          <ui-icon-button icon="close" @click="$emit('close')" />
        </div>
      </div>
    </transition>
  </portal>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.3s ease;
}

.ui-modal {
  position: relative;
  z-index: 100;

  &__overlay {
    background-color: rgba($dark, 0.9);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
  }

  &__close {
    position: fixed;
    right: 32px;
    top: 32px;
    z-index: 100;
  }

  &__wrapper {
    position: fixed;
    z-index: 100;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
</style>
