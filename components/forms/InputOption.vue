<template>
  <v-select
    :options="options"
    :value="$store.state.posts.activeOption"
    :clearable="false"
    :searchable="false"
    @input="changeOption"
  />
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    options () {
      return this.$store.state.posts.sortOptions
    }
  },
  methods: {
    changeOption (val) {
      this.$store.commit('posts/SET_ACTIVE_OPTION', val)
    }
  }
}
</script>

<style lang="scss">
@import "vue-select/src/scss/vue-select.scss";
.vs__selected {
  font-size: 12px;
  margin: 4px 2px 0px 2px;
  color: #B4B4B4;
}
.vs__dropdown-menu {
  font-size: 12px;
}
.v-select {
  & svg {
    transform: scale(.8);
  }
}
.vs__dropdown-menu {
  & svg {
    transform: scale(.8);
  }
}
</style>
