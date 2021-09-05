<template>
  <div class="container">
    <div class="product-page">
      <div class="product-gallery">
        <img :src="product.imageLink" alt="">
      </div>
      <div class="product-desc">
        {{product.name}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    ...mapState('posts', ['list']),
    /* eslint-disable */
    // when develop API id=number and id=string
    product () {
      return this.list.find(el => el.id == this.id)
    }
  },
  mounted () {
    console.log(this.list)
  }
}
</script>

<style lang="scss" scoped>
.product-page {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
