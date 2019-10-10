import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

const subscribePlug = store => {
  store.subscribe((mutation, state) => {
    localStorage.setItem('store', JSON.stringify(state))
  })
}

export default function (/* { ssrContext } */) {
  const store = new Vuex.Store({
    modules: {
      // example
    },

    state: {
      count: 1
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
      decrement: state => state.count--  
    },

    plugins: [subscribePlug]
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return store
}
