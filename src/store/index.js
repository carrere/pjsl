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
    getCategories(state) {
      let id = 0
      let categories = {}

      state.resources.forEach(r => {
        if (r.categorie && !categories[r.categorie]) {
          categories[r.categorie] = {}
          categories[r.categorie]['id'] = id++
          categories[r.categorie]['count'] = 0
          categories[r.categorie]['route'] = "/category/" + r.categorie
          categories[r.categorie]['label'] = r.categorie.charAt(0).toUpperCase() + r.categorie.slice(1)
        }
        if (r.categorie && categories[r.categorie])
        {
          categories[r.categorie]['count']++
        }
        else
        {
          console.log(r)
        }
        
      })
      return categories
    },
    getSubCategories(state) {
      let id = 0
      let subcategories = {}
      state.resources.forEach(r => {
        if (r.categorie && !subcategories[r.categorie]) {
          subcategories[r.categorie] = {}
        }
        if (r.categorie && r.souscategorie && !subcategories[r.categorie][r.souscategorie]) {
          subcategories[r.categorie][r.souscategorie] = {}
          subcategories[r.categorie][r.souscategorie]['id'] = id++
          subcategories[r.categorie][r.souscategorie]['count'] = 0
          subcategories[r.categorie][r.souscategorie]['label'] = r.souscategorie.charAt(0).toUpperCase() + r.souscategorie.slice(1)
          let route = "/category/" + r.categorie + "/" + r.souscategorie
          subcategories[r.categorie][r.souscategorie]['route'] = route
        }
        if(r.categorie && subcategories[r.categorie] && subcategories[r.categorie][r.souscategorie])
        {
          subcategories[r.categorie][r.souscategorie]['count']++
        }
      })
      return subcategories
    },
    getResources(state) {
      let resources = []
      let count = 0
      state.resources.forEach(r => {
        let keys = Object.keys(r)
        let content = ''
        keys.map(k => content += ' ' + r[k])
        r['content'] = content.toLowerCase()
        r['id'] = count++
        if (r.categorie)
        {
          resources.push(r)
        }
        
      })
      return resources
    }
  },
  mutations: {
    definirResources(state, resources) {
      state.resources = resources
    }
  },
  actions: {
    recupererResources(context) {
      return new Promise((resolve, reject) => {
        axios.get('api/data.csv')
          .then(res => {
            let config = { header: true }

            let resources = Papa.parse(res.data, config).data
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
