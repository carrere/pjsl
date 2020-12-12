<template>
  <div class="column is-one-quarter" >
    <div class="card is-shady">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">
             <a @click="isComponentModalActive = true" > {{ resource.nom }}</a>
             
            </p>
            <div class="subtitle is-6">{{ resource.souscategorie }}</div>

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

            <div>
              <b-modal ref="myModal" :active.sync="isComponentModalActive" has-modal-card>
                <div class="modal-card" style="width: auto">
                  <header class="modal-card-head">
                    <p class="modal-card-title">{{ resource.nom }}</p>
                    <a><close-icon @click="$refs.myModal.close()"/></a>
                    
                  </header>
                  <section class="modal-card-body">
                    <more-info :resource="resource" />
                   
                  </section>
                </div>
              </b-modal>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhoneIcon from "vue-material-design-icons/Phone.vue";
import EmailIcon from "vue-material-design-icons/Email.vue";
import CloseIcon from "vue-material-design-icons/Close.vue";

import MoreInfo from "./MoreInfo.vue";

export default {
  name: "ResourceListItem",
  props: {
    resource: { type: Object, required: true },
  },
  data() {
    return {
      isComponentModalActive: false,
      email: "evan@you.com",
      password: "testing",
    };
  },
  methods: {},
  components: {
    PhoneIcon,
    EmailIcon,
    MoreInfo,
    CloseIcon
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

.description {
  overflow: auto;
  max-height: 100px;
  background-color: #f5f5f5;
}
</style>
