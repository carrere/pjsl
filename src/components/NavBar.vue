<template>
  <section class="container">
      <div class="tabs">
        <ul>
          <router-link v-for="category in categories" :key="category.id" :category="category"
            active-class="is-active"
            :to="category.route" 
          >{{category.main}}</router-link>
          
        </ul>
      </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NavBar',
  methods: {},
  computed: {
    ...mapGetters({ categories: 'getCategories' })
  }
  
}
</script>

<style>
@import "../../node_modules/bulma/css/bulma.css";
.card {
  height: 100%;
}
.icon-space {
  padding-right: 0.5em;
}
</style>
