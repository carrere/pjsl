<template>
  <div class="column is-one-quarter">
    <div class="card is-shady">
      <div class="card-content"   >
        <div class="media" >
          <div  class="media-left">
            <!--<div class="modal">
              <div class="modal-background"></div>
              <div class="modal-content">
               bla bla
              </div>
              <button class="modal-close is-large" aria-label="close"></button>
            </div>
            -->
          </div>
          <div class="media-content">
            <p class="title is-4">
              {{ resource.nom
              }}<a
                v-if="resource.web != ''"
                :href="resource.web"
                target="_blank"
                ><web-icon title="Site web"
              /></a>
            </p>
            <span class="subtitle is-6" v-if="resource.tel != ''">
              <a
                :href="'tel:' + resource.tel"
                class="subtitle is-6"
                v-if="resource.tel != ''"
                ><phone-icon :size="12" /> {{ resource.tel }}
              </a></span
            >
            <div>
              <a
                :href="'mailto:' + resource.mail"
                class="subtitle is-6"
                v-if="resource.mail != ''"
              >
                <email-icon :size="12" /> <small>{{ resource.mail }}</small>
              </a>
            </div>

            <small
              ><i><p  class="body" v-html="resource.description"></p></i
            ></small>
            <span class="tag is-primary">{{ resource.souscategorie }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WebIcon from "vue-material-design-icons/Web.vue";
import PhoneIcon from "vue-material-design-icons/Phone.vue";
import EmailIcon from "vue-material-design-icons/Email.vue";
export default {
  name: "ResourceListItem",
  props: {
    resource: { type: Object, required: true },
  },
  methods: {},
  components: {
    WebIcon,
    PhoneIcon,
    EmailIcon,
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
</style>
