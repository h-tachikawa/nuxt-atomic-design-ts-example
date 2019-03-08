import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      counter: 0
    }),
    getters: {
      counter (state) {
        return state.counter;
      }
    },
    mutations: {
      increment (state) {
        state.counter++
      }
    }
  })
}

export default createStore
