import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

/* const subscribePlug = store => {
  store.subscribe((mutation, state) => {
    localStorage.setItem('store', JSON.stringify(state))
  })
} */

export default function (/* { ssrContext } */) {
  const store = new Vuex.Store({
    modules: {
      // example
    },

    state: {
      textColor: 'green',
      count: 1,

      status: '',
      user: {},
      token: localStorage.getItem('token') || '',

      connected: navigator.onLine
    },

    getters: {
      isLoggedIn: state => !!state.token,

      authStatus: state => state.status,

      connected: state => state.connected
    },

    mutations: {
      initialiseStore (state) {
        if (localStorage.getItem('store')) {
          this.replaceState(Object.assign(state, JSON.parse(localStorage.getItem('store'))))
        }
      },
      increment (state) {
        state.count++
      },
      decrement (state) {
        state.count--
      },
      colorSet (state, choice) {
        state.textColor = choice
      },
      saveState (state) {
        localStorage.setItem('store', JSON.stringify(state))
      },
      auth_request (state) {
        state.status = 'loading'
      },
      auth_success (state, token, user) {
        state.status = 'success'
        state.token = token
        state.user = user
      },
      auth_error (state) {
        state.status = 'error'
      },
      logout (state) {
        state.status = ''
        state.token = ''
      },
      setConnected (state, connection) {
        state.connected = connection
      }
    },

    actions: {
      login ({ commit }, user) {
        return new Promise((resolve, reject) => {
          commit('auth_request')
          axios({ url: 'Login', data: user, method: 'POST' })
            .then(resp => {
              const token = resp.data.token
              const user = resp.data.user
              localStorage.setItem('token', token)
              axios.defaults.headers.common['Authorization'] = token
              commit('auth_success', token, user)
              resolve(resp)
            })
            .catch(err => {
              commit('auth_error')
              localStorage.removeItem('token')
              reject(err)
            })
        })
      },

      register ({ commit }, user) {
        return new Promise((resolve, reject) => {
          commit('auth_request')
          axios({ url: '/userinfo', data: user, method: 'POST' })
            .then(resp => {
              const token = resp.data.token
              const user = resp.data.user
              localStorage.setItem('token', token)
              axios.defaults.headers.common['Authorization'] = token
              commit('auth_success', token, user)
              resolve(resp)
            })
            .catch(err => {
              commit('auth_error', err)
              localStorage.removeItem('token')
              reject(err)
            })
        })
      },

      logout ({ commit }) {
        return new Promise((resolve, reject) => {
          commit('logout')
          localStorage.removeItem('token')
          delete axios.defaults.headers.common['Authorization']
          resolve()
        })
      },

      setConnection ({ commit }, connection) {
        commit('setConnected', connection)
      }
    },

    // plugins: [subscribePlug],
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return store
}
