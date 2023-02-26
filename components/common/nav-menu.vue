<template>
  <nav class="nav-menu">
    <ul class="nav-menu__list">
      <li v-for="link in links" :key="link.id" class="nav-menu__item">
        <a class="nav-menu__link" :href="`/#${link.id}`" @click.prevent="scrollTo(link.id)">
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
  { id: 'about', label: 'Обо мне' }
]

export default {
  data () {
    return {
      links
    }
  },
  methods: {
    scrollTo (anchorId) {
      const anchor = document.querySelector(`#${anchorId}`)

      if (anchor) {
        window.scrollTo({
          top: anchor.getBoundingClientRect().top + window.pageYOffset,
          behavior: 'smooth'
        })
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
