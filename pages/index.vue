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
  }
}
</script>
<style lang="scss" scoped>
</style>
