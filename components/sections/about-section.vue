<template>
  <section class="about-section">
    <ui-title centered class="about-section__title">
      Обо мне
    </ui-title>
    <div class="about-section__content">
      <div class="about-section__about-text">
        <ui-text v-for="text in aboutText" :key="text" class="about-section__paragraph" color="caption">
          {{ text }}
        </ui-text>
      </div>

      <div class="about-section__contacts">
        <a href="mailto:yaickiu@gmail.com">
          <ui-text color="yellow">
            yaickiu@gmail.com
          </ui-text>
        </a>
        <a href="tel:+7(926)394-95-09">
          <ui-text color="yellow">
            +7(926)394-95-09
          </ui-text>
        </a>
      </div>

      <social-links class="about-section__social" />
    </div>
  </section>
</template>

<script>
const aboutText = [
  'На протяжении последних семи лет занимаюсь разработкой IT-продуктов.',
  'Бесконечно люблю дизайн во всех его проявлениях, тащусь от визуализации данных.',
  'Закончил МГУ. Работал наставником в онлайн-школах Lofstschool и HTML Академия.',
  'Ценю красоту во всем, катаюсь на скейте, играю в шахматы, пробую себя в рисовании, люблю горы и море.',
  'Нравится Figma, VS Code, Vue, Nuxt, Mapbox, Photoshop, Illustrator, Notion и Todoist.'
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

  &__title {
    margin-bottom: 64px;

    @include phones {
      margin-bottom: 48px;
    }
  }

  &__content {
    max-width: 560px;
    display: flex;
    flex-direction: column;
    gap: 48px;

    @include phones {
      max-width: 100%;
      gap: 32px;
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

  &__contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  &__social {
    justify-content: center;
  }
}
</style>
