<template>
  <ui-button before-icon="angle-left" @click="backToMain">
    На главную
  </ui-button>
</template>

<script>
export default {
  methods: {
    backToMain () {
      this.$router.push('/')
    }
  }
}
</script>
