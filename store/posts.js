export const state = () => ({
  activeOption: 'По умолчанию',
  sortOptions: [
    'По умолчанию',
    'Сначала дороже',
    'Сначала дешевле',
    'По алфавиту'
  ],
  list: [
    {
      id: 1,
      name: 'A Товар обычный',
      description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      price: '7500',
      imageLink: 'https://source.unsplash.com/random/500x500'
    },
    {
      id: 2,
      name: 'Я Необычный товар',
      description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      price: '4300',
      imageLink: 'https://source.unsplash.com/random/500x500'
    },
    {
      id: 3,
      name: 'Это Простой товар',
      description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      price: '11000',
      imageLink: 'https://source.unsplash.com/random/500x500'
    },
    {
      id: 4,
      name: 'Мы Хорошие товары',
      description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      price: '10000',
      imageLink: 'https://source.unsplash.com/random/500x500'
    }
  ]
})

export const getters = {
  getOption: (state) => { return state.activeOption }
}

export const mutations = {
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
