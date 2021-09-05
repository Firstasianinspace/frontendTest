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
        <div class="delete-icon__wrapper" v-if="cardHover">
          <CardDeleteIcon
          @click.native="removePost(card.id)"
        />
        </div>
      </transition>
      </div>
      <Spinner slot="preloader"/>
      <div slot="error">Ошибка при загрузке изображения</div>
    </VueLoadImage>
    <div class="card-text">
      <h4 class="card-text__title">
        {{card.name}}
      </h4>
      <p class="card-text__price">
        {{getHighestBid | currency }}
      </p>
      <p class="card-text__time">
        <VueCountdown :time="getTime">
          <template slot-scope="props">
            {{ props.days }} {{getNoun(props.days, 'день', 'дня', 'дней')}},
            {{ props.hours }} {{getNoun(props.hours, 'час', 'часа', 'часов')}},
            {{ props.minutes }} {{getNoun(props.minutes, 'минута', 'минуты', 'минут')}}.
          </template>
        </VueCountdown>
      </p>
      <nuxt-link :to="`product/${card.id}`" class="card-text__link">
        Перейти
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import VueLoadImage from 'vue-load-image'
import VueCountdown from '@chenfengyuan/vue-countdown'
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
    CardDeleteIcon,
    VueCountdown
  },
  data () {
    return {
      cardHover: false,
      time: null
    }
  },
  computed: {
    getHighestBid () {
      const bids = this.card.bids
      const filterBids = bids.map((value) => {
        return parseInt(value.price, 10)
      })
      return Math.max(...filterBids)
    },
    getTime () {
      const now = new Date()
      const finished = this.card.ended_at
      return Date.parse(finished) - Date.parse(now)
    }
  },
  methods: {
    getNoun (number, one, two, five) {
      let n = Math.abs(number)
      n %= 100
      if (n >= 5 && n <= 20) {
        return five
      }
      n %= 10
      if (n === 1) {
        return one
      }
      if (n >= 2 && n <= 4) {
        return two
      }
      return five
    },
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
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.card {
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  cursor: pointer;
  &-image {
    height: 250px;
    background-position: center center;
    background-size: cover;
    position: relative;
  }
  &-text {
    padding: 16px 16px 24px 16px;
    background: #FAF8FF;
    &__title {
      font-size: 20px;
      line-height: 25px;
      color: #3F3F3F;
    }
    &__price {
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
      color: #3F3F3F;
    }
    &__link {

    }
  }
}
</style>
