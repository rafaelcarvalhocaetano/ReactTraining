import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    // variáveis
    contador: 3
    // são acessadas através do $store dentros dos componentes pai filho e a porra toda
    // $store.state.contador


  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})