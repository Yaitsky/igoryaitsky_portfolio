<template>
  <nav class="nav-menu">
    <ul class="nav-menu__list">
      <li v-for="link in links" :key="link.id" class="nav-menu__item">
        <a class="nav-menu__link" :href="`/#${link.id}`" @click.prevent="goTo(link.id)">
          <ui-text type="small">
            {{ link.label }}
          </ui-text>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
const links = [
  { id: 'projects', label: 'Проекты' },
  { id: 'illustrations', label: 'Рисунки' },
  { id: 'about', label: 'Обо мне' }
]

export default {
  data () {
    return {
      links
    }
  },
  methods: {
    goTo (anchorId) {
      if (this.$route.name === 'index') {
        const anchor = document.querySelector(`#${anchorId}`)

        if (anchor) {
          window.scrollTo({
            top: anchor.getBoundingClientRect().top + window.pageYOffset,
            behavior: 'smooth'
          })
        }
      } else {
        this.$router.push(`/#${anchorId}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-menu {
  &__list {
    display: flex;
    align-items: center;
    gap: 32px;
  }
}
</style>
