<template>
  <div class="card">
    <VueLoadImage>
      <div
        slot="image"
        class="card-image"
        :style="{ backgroundImage: `url(${card.imageLink})` }"
        :data-src="card.imageLink"
      >
        <div class="delete-icon__wrapper">
          <CardDeleteIcon
          @click.native="removePost(card.id)"
          />
        </div>
      </div>
      <Spinner slot="preloader"/>
      <div slot="error">Ошибка при загрузке изображения</div>
    </VueLoadImage>
    <div class="card-text">
      <h4 class="card-text__title">{{card.name}}</h4>
      <p class="card-text__desc">{{ card.description }}</p>
      <p class="card-text__price">{{ card.price | currency }}</p>
    </div>
  </div>
</template>

<script>
import VueLoadImage from 'vue-load-image'
import Spinner from '@/components/Spinner'
import CardDeleteIcon from '@/components/cards/CardDeleteIcon'

export default {
  name: 'Card',
  props: {
    card: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  components: {
    VueLoadImage,
    Spinner,
    CardDeleteIcon
  },
  methods: {
    removePost (id) {
      this.$store.dispatch('posts/deletePost', id)
    }
  }
}
</script>

<style lang="scss" scoped>
.delete-icon__wrapper {
  position: absolute;
  top: -8px;
  right: -8px;
}
</style>
