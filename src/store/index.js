import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Papa from 'papaparse'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    resources: []
  },
  getters: {
    // ~computed
    getCategories (state) {
      let count = 0
      let categories = {}
      
      state.resources.forEach(r => {
        if (! categories[r.categorie])
        {
          console.log("ici")
          categories[r.categorie] = {}
          categories[r.categorie]['id'] = count++
          categories[r.categorie]['route'] = "/category/" + r.categorie
          categories[r.categorie]['main'] = r.categorie.charAt(0).toUpperCase() + r.categorie.slice(1)
          categories[r.categorie]['sub'] = {}
          
        }
        categories[r.categorie]['sub'][r.souscategorie] = true
      })

      console.log(categories)
      
      return categories

    },
    getResources (state) {
      console.table(state.resources)
      return state.resources
    }
  },
  mutations: {
    definirResources (state, resources) {
      state.resources = resources
    }
  },
  actions: {
    recupererResources (context) {
      return new Promise((resolve, reject) => {
        axios.get('api/data.csv')
          .then(res => {
            let config = {header: true}
            
            let resources = Papa.parse(res.data, config).data
            //console.log(resources)
            context.commit('definirResources', resources)
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  },
  modules: {}
})
