<template>
  <div class="home-page">
    <CardsGrid />
  </div>
</template>

<script>
import CardsGrid from '@/components/cards/CardsGrid'

export default {
  name: 'Home',
  layout: 'SidebarLayout',
  components: {
    CardsGrid
  },
  mounted () {
    this.$store.dispatch('posts/getPosts')
  }
}
</script>
<style lang="scss" scoped>
</style>
