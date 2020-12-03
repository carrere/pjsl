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
    <div><nav-bar /></div>
    <section class="container">
      <div class="columns is-multiline">
        <div v-if="!ready">Loading</div>
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
