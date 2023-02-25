<template>
  <section id="hello" class="hello-section">
    <ui-container>
      <page-header />
      <div class="hello-section__content">
        <div class="hello-section__text">
          <ui-title type="title">
            Привет 👋
          </ui-title>
          <ui-title class="hello-section__subtitle">
            Я <span class="yellow">Игорь</span>, сын Игоря, <br>
            продуктовый дизайнер и <br>
            фронтенд-разработчик
          </ui-title>
        </div>
        <div class="hello-section__avatar">
          <img src="~/assets/images/avatar.png" alt="Igor Yaitsky">
        </div>
      </div>
    </ui-container>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.hello-section {
  background: $bg-gradient;
  display: flex;
  align-items: center;
  flex-direction: column;

  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 96px;
    padding: 32px 0;

    @include tablets {
      gap: 64px;
    }

    @include phones {
      flex-direction: column-reverse;
      gap: 48px;
    }
  }

  &__text {
    @include phones {
      text-align: center;
    }
  }

  &__subtitle {
    margin-top: 32px;

    @include phones {
      margin-top: 16px;
    }
  }

  &__avatar {
    img {
      height: 420px;

      @include tablets {
        height: 320px;
      }

      @include phones {
        width: 280px;
        height: auto;
      }
    }
  }
}
</style>
