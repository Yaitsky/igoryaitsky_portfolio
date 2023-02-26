<template>
  <div class="contact-links">
    <a href="mailto:yaickiu@gmail.com" target="_blank">
      <ui-text color="yellow">
        yaickiu@gmail.com
      </ui-text>
    </a>
    <a href="tel:+7(926)394-95-09" target="_blank">
      <ui-text color="yellow">
        +7(926)394-95-09
      </ui-text>
    </a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.contact-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @include phones {
    gap: 8px;
  }
}
</style>
