<template>
  <div class="cards-grid__wrapper">
    <transition-group name="flip-list" class="cards-grid" v-if="!loading" tag="div">
      <Card
      v-for="post in sortedPosts"
      :key="post.id"
      :card="post"
      />
    </transition-group>
    <div class="cards-grid__loading" v-if="loading">
      <CardLoading
      v-for="post in sortedPosts"
      :key="post.id"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Card from '@/components/cards/Card'
import CardLoading from '@/components/cards/CardLoading'

export default {
  name: 'CardsGrid',
  components: {
    Card,
    CardLoading
  },
  data () {
    return {
      loading: true
    }
  },
  computed: {
    ...mapGetters(['posts/getOption']),
    posts () {
      return this.$store.state.posts.list
    },
    sortedPosts () {
      if (this.$store.state.posts.activeOption === 'По умолчанию') {
        return this.posts
      }
      if (this.$store.state.posts.activeOption === 'Сначала дешевле') {
        const lowToHigh = [...this.posts]
        return lowToHigh.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
      }
      if (this.$store.state.posts.activeOption === 'Сначала дороже') {
        const highToLow = [...this.posts]
        return highToLow.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
      } else {
        const alphabet = [...this.posts]
        return alphabet.sort((a, b) => a.name.localeCompare(b.name))
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.loading = false
    }, 2000)
  }
}
</script>

<style lang="scss" scoped>
.flip-list-move {
  transition: transform 1s;
}
</style>
