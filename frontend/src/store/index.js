import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      user: {},
      authorization: '',
    }
  },

  mutations: {
    SET_USER_INFO(state, data) {
      state.user = data
    },
    SET_AUTHORIZATION(state, data) {
      sessionStorage.setItem('authorization', data)
      state.authorization = data
    }
  },

  actions: {

  },

  getters: {

  },

  modules: {

  }
})