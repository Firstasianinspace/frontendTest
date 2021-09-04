/* eslint-disable */
export const state = () => ({
  open: []
})

export const getters = {
  active: (state) => { return (state.open.length > 0 ? state.open[0] : null) },
  allOpen: (state) => { return state.open }
}

export const mutations = {
  OPEN: (state, payload) => state.open.unshift(payload),
  CLOSE: (state, payload) => (state.open = state.open.filter((e) => e !== payload))
}

export const actions = {
  open: ({ commit }, payload) => commit('OPEN', payload),
  close: ({ commit }, payload) => commit('CLOSE', payload)
}
