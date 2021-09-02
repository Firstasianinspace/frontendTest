import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'state',
    paths: ['posts']
  })(store)
}
