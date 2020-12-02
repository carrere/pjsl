<template>
  <div class="column is-4">
    <div class="card is-shady">
      <div class="card-content">
        <div class="media">
<!--           <div class="media-left">
            <figure class="image is-48x48">
              <img :src="resource.logo" alt="Placeholder image" />
            </figure>
          </div> -->
          <div class="media-content">
            <p class="title is-4" v-html="resource.nom"></p>
            <p class="subtitle is-6" v-html="resource.mail"></p>
            <p class="subtitle is-6" v-html="resource.tel"></p>
            <a :href="resource.web"><button class="button">Web</button></a>
            <p class="body" v-html="resource.description"></p>
          <span class="tag is-primary">{{ resource.souscategorie }}</span>
          </div>
        </div>
        <div class="links content buttons are-small">
          <span v-for="link in resource.links" :key="link.index">
            <a class="button is-link is-inverted" :href="link.href" :target="link.label">
              <i v-if="link.private" class="fas fa-lock fa-xs icon-space" />
              <div v-html="link.label"></div>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResourceListItem',
  props: {
    resource: { type: Object, required: true }
  },
  methods: {}
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
