<template>
  <ul class="social-links">
    <li v-for="link in links" :key="link.id" class="social-links__item">
      <a :href="link.url" target="_blank">
        <ui-icon :icon="link.id" color="caption" />
      </a>
    </li>
  </ul>
</template>

<script>
const links = [
  { id: 'telegram', url: 'https://t.me/igoryaitsky' },
  { id: 'instagram', url: 'https://instagram.com/igoryaitsky' },
  { id: 'vk', url: 'https://vk.com/igoryaitsky' }
]

export default {
  data () {
    return {
      links
    }
  }
}
</script>

<style lang="scss">
.social-links {
  display: flex;
  align-items: center;
  gap: 32px;

  @include phones {
    gap: 24px;
  }

  .ui-icon svg {
    width: 40px;
    height: 40px;

    @include tablets {
      width: 32px;
      height: 32px;
    }
  }
}
</style>
