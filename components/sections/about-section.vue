<template>
  <section id="about" class="about-section">
    <ui-title centered>
      Обо мне
    </ui-title>
    <ui-divider />
    <div class="about-section__content">
      <div class="about-section__about-text">
        <ui-text v-for="text in aboutText" :key="text" class="about-section__paragraph">
          {{ text }}
        </ui-text>
      </div>

      <contact-links />

      <social-links class="about-section__social" />
    </div>
  </section>
</template>

<script>
const aboutText = [
  'На протяжении последних семи лет занимаюсь разработкой IT-продуктов.',
  'Бесконечно люблю дизайн во всех его проявлениях, тащусь от визуализации данных.',
  'Закончил МГУ. Работал наставником в онлайн-школах Lofstschool и HTML Академия.',
  'Ценю красоту во всем, катаюсь на скейте, кайфую от шахмат, люблю залипать на горы и море.',
  'Нравится Figma, VS Code, Vue, Nuxt, Mapbox, Illustrator, Google Docs, Obsidian и Todoist.'
]

export default {
  data () {
    return {
      aboutText
    }
  }
}
</script>

<style lang="scss">
.about-section {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__content {
    max-width: 560px;
    display: flex;
    flex-direction: column;
    gap: 48px;
    margin-top: 64px;

    @include phones {
      max-width: 100%;
      gap: 32px;
      margin-top: 48px;
    }
  }

  &__paragraph {
    &:not(:first-child) {
      margin-top: 16px;

      @include phones {
        margin-top: 8px;
      }
    }
  }

  &__social {
    justify-content: center;
  }
}
</style>
