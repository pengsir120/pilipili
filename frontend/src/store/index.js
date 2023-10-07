import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state() {
    return {
      user: {},
    }
  },

  mutations: {
    SET_USER_INFO(state, data) {
      state.user = {
        ...data,
        cover: `${import.meta.env.VITE_APP_API_BASE}/${data.cover}` || '',
        authorization: data.token,
      }
    },
    SET_AUTHORIZATION(state, data) {
      sessionStorage.setItem('authorization', data)
    }
  },

  actions: {

  },

  getters: {

  },

  modules: {

  },
  plugins: [createPersistedState({
    paths: ['user'],
    storage: window.sessionStorage
  })]
})