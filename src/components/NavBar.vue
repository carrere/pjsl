<template>
  <section class="container">
    <div class="tabs is-centered">
      <ul>
        <router-link
          v-for="category in categories"
          :key="category.id"
          :category="category"
          active-class="is-active"
          :to="category.route"
          >{{ category.label }}</router-link
        >
        <li>
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
        </li>
      </ul>
    </div>

    <div
      v-if="this.$route.params.main"
      class="tabs is-centered is-toggle is-small"
    >
      <ul>
        <router-link
          v-for="sub in subcategories[this.$route.params.main]"
          :key="sub.id"
          :sub="sub"
          active-class="is-active"
          :to="sub.route"
          >{{ sub.label }}</router-link
        >
      </ul>
    </div>



<!--    <div class="columns is-multiline"
      v-if="!this.$route.params.main && !this.$route.params.search"
    >

        <article  v-for="category in Object.keys(subcategories)" :key="category" class="message is-light column is-one-quarter">
          <div class="message-header">
            <p>{{ category }}</p>
          </div>
          <div class="message-body">
            <router-link
          v-for="sub in subcategories[category]"
          :key="sub.id"
          :sub="sub"
          :to="sub.route"
          >&nbsp; <button class="button"> {{ sub.label }}</button> &nbsp;</router-link
        >
          </div>
        </article>
      </div>
-->
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import MagnifyIcon from "vue-material-design-icons/Magnify.vue";
export default {
  name: "NavBar",
  methods: {
    searchKeyword() {
      this.$router.push({
        name: "searchPage",
        params: { search: this.search },
      });
    },
  },
  components: {
    MagnifyIcon,
  },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapGetters({ categories: "getCategories" }),
    ...mapGetters({ subcategories: "getSubCategories" }),
  },
};
</script>

<style>
@import "../../node_modules/bulma/css/bulma.css";
.card {
  height: 100%;
}
.icon-space {
  padding-right: 0.5em;
}
.is-active {
  background-color: rgb(218, 218, 218);
  cursor: pointer;
}
</style>
