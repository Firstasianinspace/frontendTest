export const state = () => ({
  activeOption: 'По умолчанию',
  sortOptions: [
    'По умолчанию',
    'Сначала дороже',
    'Сначала дешевле',
    'По алфавиту'
  ],
  list: []
})

export const getters = {
  getOption: (state) => { return state.activeOption }
}

export const mutations = {
  SET_POSTS (state, list) {
    state.list = list
  },
  ADD_POST (state, post) {
    state.list.unshift(post)
  },
  DELETE_POST (state, id) {
    const index = state.list.findIndex(item => item.id === id)
    state.list.splice(index, 1)
  },
  SET_ACTIVE_OPTION (state, option) {
    state.activeOption = option
  }
}

export const actions = {
  async getPosts ({ commit }) {
    await this.$axios.get('https://api.jsonbin.io/b/613252803b222b1d0d95e29f/2')
      .then((response) => {
        commit('SET_POSTS', response.data.posts)
      })
  },
  async addPost (context, post) {
    try {
      await context.commit('ADD_POST', post)
    } catch (error) {
      console.log(error)
    }
  },
  async deletePost (context, id) {
    try {
      await context.commit('DELETE_POST', id)
    } catch (error) {
      console.log(error)
    }
  }
}
