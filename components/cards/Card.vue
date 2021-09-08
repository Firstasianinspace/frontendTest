<template>
  <div
    ref="singleCard"
    class="card"
    @mouseenter="mouseEnter()"
    @mouseleave="mouseLeave()"
  >
    <VueLoadImage>
      <div
        slot="image"
        class="card-image"
        :style="{ backgroundImage: `url(${card.imageLink})` }"
        :data-src="card.imageLink"
      >
      <transition name="fade" mode="out-in">
      </transition>
      </div>
      <Spinner slot="preloader"/>
      <div slot="error" class="error-image">Ошибка при загрузке изображения</div>
    </VueLoadImage>
        <div class="delete-icon__wrapper" v-if="cardHover">
      <CardDeleteIcon
        @click.native="removePost(card.id)"
      />
    </div>
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
  data () {
    return {
      cardHover: false
    }
  },
  methods: {
    // Not ideal
    removePost (id) {
      const singlePost = this.$refs.singleCard
      this.$gsap.to(singlePost, {
        opacity: 0,
        duration: '1'
      })
      setTimeout(() => {
        this.$store.dispatch('posts/deletePost', id)
      }, 1000)
    },
    mouseEnter () {
      this.cardHover = true
    },
    mouseLeave () {
      this.cardHover = false
    }
    // Doesn't work
    // enter (el) {
    //   this.$gsap.to(el, {
    //     opacity: 1,
    //     duration: 1
    //   })
    //   console.log('enter')
    // },
    // leave (el) {
    //   this.$gsap.to(el, {
    //     opacity: 0,
    //     duration: 1
    //   })
    //   console.log('leave')
    // }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.error-image {
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
