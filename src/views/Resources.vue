<template>
  <section class="container">
    <hr />

    
      <div v-if="this.$route.params.search" class="message"> Search: "{{this.$route.params.search}}"</div>
      <div v-if="this.$route.params.search" class="columns is-multiline">
      <resource-list-item
        v-for="resource in resources
          .filter((r) => r.content.includes(this.$route.params.search.toLowerCase()))"
        :key="resource.id"
        :resource="resource"
      ></resource-list-item>
    </div>
    <div v-else-if="this.$route.params.sub" class="columns is-multiline">
      <resource-list-item
        v-for="resource in resources
          .filter((r) => r.categorie.includes(this.$route.params.main))
          .filter((r) => r.souscategorie.includes(this.$route.params.sub))"
        :key="resource.id"
        :resource="resource"
      ></resource-list-item>
    </div>

    <div v-else-if="this.$route.params.main" class="columns is-multiline">
      <resource-list-item
        v-for="resource in resources.filter((r) =>
          r.categorie.includes(this.$route.params.main)
        )"
        :key="resource.id"
        :resource="resource"
      ></resource-list-item>
    </div>
  </section>
</template>

<script>
import ResourceListItem from "@/components/ResourceListItem.vue";
import { mapGetters } from "vuex";

export default {
  name: "Resources",
  components: {
    ResourceListItem,
  },
  computed: {
    ...mapGetters({ resources: "getResources" }),
  },
};
</script>

<style>
@import "../../node_modules/bulma/css/bulma.css";
</style>
