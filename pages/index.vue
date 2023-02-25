<template>
  <div class="app">
    <ui-loader v-show="loading" />
    <section v-show="!loading">
      <ui-container>
        <ui-logo />
        <ui-logotype />
        <div style="margin-top: 24px;">
          <img src="~/assets/images/avatar.png" width="320">
        </div>
        <ui-title type="title">
          Hello World!
        </ui-title>
        <ui-title color="caption">
          by <span class="yellow">Igor Yaitsky</span>
        </ui-title>
        <ui-text> Body Text! </ui-text>
        <ui-text type="small" color="caption">
          Small Text!
        </ui-text>
        <ui-divider />
        <ui-divider type="skate" />
        <ui-divider type="chess" />
        <ui-icon icon="burger-menu" />
        <ui-icon icon="angle-left" />
        <ui-icon icon="arrow-small" />
        <ui-icon icon="instagram" color="yellow" />
        <ui-icon icon="vk" color="yellow" />
        <ui-icon icon="telegram" color="yellow" />
        <ui-button after-icon="arrow-small">
          Подробнее
        </ui-button>
        <ui-button before-icon="angle-left">
          На главную
        </ui-button>
        <ui-tag>
          design
        </ui-tag>
        <ui-tag type="coral">
          frontend
        </ui-tag>
        <ui-tag type="green">
          founder
        </ui-tag>
        <ui-tag type="light-blue">
          lead
        </ui-tag>
      </ui-container>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
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

<style scoped lang="scss">
.app {
  section {
    display: flex;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
  }
}
</style>
