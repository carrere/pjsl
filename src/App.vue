<template>
  <div id="app">
    <section class="hero is-white is-small">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns is-vcentered">
            <div class="column is-three-quarter">
              <a href="/"
                ><span class="title"
                  >Les pages jaunes de <br />Saint-Leon/Caussidières</span
                ></a
              ><br />
            </div>
            <div class="column is-one-quarter">
              <div class="field">
                <p class="control has-icons-right">
                  &nbsp;&nbsp;<input
                    size="10"
                    class="input"
                    v-model="search"
                    type="text"
                    placeholder="mots clés"
                    @input="searchKeyword()"
                  />
                  <span class="icon is-small is-right">
                    <magnify-icon />
                  </span>
                </p>
              </div>
            </div>

            <div class="column is-one-quarter">
              <a href="/"
                ><img src="img/wordcloud.png" width="200em" alt=""
              /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <a ref="results" />
    <div>
      <nav-bar />
    </div>
    <hr />
    <section class="container">
      <div class="columns is-multiline">
        <div
          v-if="!this.$route.params.main && !this.$route.params.search"
          class="container card"
        >
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-128x128">
                  <a href="https://www.saintleon31.fr">
                    <img src="img/mairie.jpg" alt="Placeholder image" />
                  </a>
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">Bienvenue sur vos pages jaunes</p>
                <p class="subtitle is-6">Saint-Léon / Caussidières</p>
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
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Site développé et maintenu par
          <a href="https://twitter.com/SebCarrere">Sebastien Carrere</a>. <br>
          Le code OpenSource est disponible sur <a href="https://github.com/carrere/pjsl">GitHub</a>. <br>
          Le contenu est collecté par la <a href="http://www.saintleon31.fr/"  >Mairie de Saint-Léon</a> avec l'accord des personnes morales ou physiques.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import NavBar from "@/components/NavBar.vue";
import MagnifyIcon from "vue-material-design-icons/Magnify.vue";

export default {
  name: "App",
  components: {
    NavBar,
    MagnifyIcon,
  },
  methods: {
    ...mapActions({ getResourcesFromServer: "recupererResources" }),
    searchKeyword() {
      window.scrollBy({
        top: this.$refs.results.getBoundingClientRect().top,
        behavior: "smooth",
      });
      this.$router.push({
        name: "searchPage",
        params: { search: this.search },
      });
    },
  },
  data() {
    return {
      ready: false,
      search: "",
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
