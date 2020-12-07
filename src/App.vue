<template>
  <div id="app">
    <section class="hero is-white is-small">
      <div class="hero-body">
        <div class="container has-text-centered">
          <a href="https://www.saintleon31.fr">
            <img src="img/mairie.jpg" alt="Logo" width="120" />
          </a>
          <p class="title">
            Services @ Saint-Leon
            <br />
            <span class="tag is-success">Les pages jaunes de Saint-Leon</span>
          </p>
        </div>
      </div>
    </section>
    <div>
      <nav-bar />
   
    </div>
    <hr>
    <section class="container">
      <div class="columns is-multiline">
  <div v-if="!this.$route.params.main && !this.$route.params.search" class="container card">
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-128x128">
          <img src="img/wordcloud.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">Bienvenue sur vos pages jaunes</p>
        <p class="subtitle is-6"> Saint-Léon / Caussidières</p>
      </div>
    </div>

    <div class="content">
      <ul>
  <li>Comment figurer ?</li>
<li>Comment ne pas figurer?</li>
<li>Charte</li>
<li><a href="mailto:Contact">Nous contacter</a></li>
<li><a href="/api/data.csv">Lien rawdata</a></li>
</ul>
    </div>
  </div>
</div>


        <div v-else class="container">
          <router-view />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
  methods: {
    ...mapActions({ getResourcesFromServer: "recupererResources" }),
  },
  data() {
    return {
      ready: false,
    };
  },
  created() {
    this.getResourcesFromServer()
      .then(() => {
        this.ready = true;
      })
      .catch((err) => {
        console.log("Erreur de recuperation des resources", err);
      })
      .finally(() => {
        this.ready = true;
      });
  },
};
</script>

<style>
@import "../node_modules/bulma/css/bulma.css";
</style>
