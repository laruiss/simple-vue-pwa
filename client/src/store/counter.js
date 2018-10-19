export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const RESET_COUNT = 'RESET_COUNT'

export default {
  state: {
    count: 0,
    increment: 1,
  },

  mutations: {
    [INCREMENT] (state) {
      state.count = state.count + state.increment
    },
    [DECREMENT] (state) {
      state.count = state.count - state.increment
    },
    [RESET_COUNT] (state) {
      state.count = 0
    },
  },

  actions: {
    async [INCREMENT] ({ commit, state }) {
      commit(INCREMENT)
    },
    async [DECREMENT] ({ commit, state }) {
      commit(DECREMENT)
    },
    async [RESET_COUNT] ({ commit, state }) {
      commit(RESET_COUNT)
    },
  },
}
