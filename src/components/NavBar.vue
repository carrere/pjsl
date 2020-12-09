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
          >
                    <div class="control">
    <div class="tags has-addons">
      <span class="tag is-light is-large">{{ category.label }}</span>
      <span class="tag is-large is-primary">{{ category.count }}</span>
    </div></div>
          </router-link
        >
      </ul>
    </div>

    <div
      v-if="this.$route.params.main"
      class="tabs is-centered is-small"
    >
      <ul>
        <router-link
          v-for="sub in subcategories[this.$route.params.main]"
          :key="sub.id"
          :sub="sub"
          active-class="is-active"
          :to="sub.route"
          >
          <div class="control">
    <div class="tags has-addons">
      <span class="tag ">{{ sub.label }}</span>
      <span class="tag is-primary">{{ sub.count }}</span>
    </div>
  </div>
</router-link
        >
      </ul>
    </div>

  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NavBar",
  methods: {
  },
  components: {
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
