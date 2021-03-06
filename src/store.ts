import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    links:[
    ]

  },
  getters:{
    countLinks: state => {
      return state.links.length
    }
  },
  mutations: {
    ADD_LINK: (state,link) =>
    {
      state.links.push(link)
    },
    REMOVE_LINK: (state,index) =>
    {
      state.links.splice(index,1)
    }
  },
  actions: {

  }
})
