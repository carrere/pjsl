<template>
  <div class="column is-one-quarter">
    <div class="card is-shady">
      <div class="card-content">
        <div class="media">
<!--           <div class="media-left">
            <figure class="image is-48x48">
              <img :src="resource.logo" alt="Placeholder image" />
            </figure>
          </div> -->
          <div class="media-content">
            <p class="title is-4" >{{resource.nom}}<a v-if="resource.web != ''" :href="resource.web" target="_blank"><web-icon  title="Site web"/></a></p>
            <span class="subtitle is-6" v-if="resource.tel != ''"> <phone-icon :size="12"/> {{resource.tel}} </span>
            <div><a :href="'mailto:' + resource.mail" class="subtitle is-6" v-if="resource.mail != ''"> <email-icon :size="12"/> <small>{{resource.mail}}</small> </a></div>
            
            
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
import WebIcon from 'vue-material-design-icons/Web.vue';
import PhoneIcon from 'vue-material-design-icons/Phone.vue';
import EmailIcon from 'vue-material-design-icons/Email.vue';
export default {
  name: 'ResourceListItem',
  props: {
    resource: { type: Object, required: true }
  },
  methods: {},
  components: {
  WebIcon,
  PhoneIcon,
  EmailIcon
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
