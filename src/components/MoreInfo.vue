<template>
  <div class="container" style="width:50em;">
    <div v-if="resource.adresse != ''">
      <div class="tags has-addons">
        <span class="tag is-light is-large"><map-marker-icon /></span>
        <span class="tag is-white is-large"
          ><a target="map" :href="'https://maps.google.com/maps?q=' + resource.adresse">{{ resource.adresse }}</a></span
        >
      </div>
    </div>

    <div v-if="resource.mail != ''">
      <div class="tags has-addons">
        <span class="tag is-light is-large"><email-icon /></span>
        <span class="tag is-white is-large"
          ><a :href="'mailto:' + resource.mail">{{ resource.mail }}</a></span
        >
      </div>
    </div>

     <div v-if="resource.tel != ''">
      <div class="tags has-addons">
        <span class="tag is-light is-large"><phone-icon /></span>
        <span class="tag is-white is-large"
          ><a :href="'tel:' + resource.tel">{{ resource.tel }}</a></span
        >
      </div>
    </div>

     <div v-if="resource.horaires != ''">
      <div class="tags has-addons">
        <span class="tag is-light is-large"><clock-icon /></span>
        <span class="tag is-white is-large"
          >{{ resource.horaires }}</span
        >
      </div>
    </div>

   <div v-if="resource.web != ''">
      <div class="tags has-addons">
        <span class="tag is-light is-large"><web-icon /></span>
        <span class="tag is-white is-large"
          ><a :href="resource.web">Site Web</a></span
        >
      </div>
    </div>

      <div v-if="resource.catalogue != ''">
      <div class="tags has-addons">
        <span class="tag is-light is-large"><cash-icon /></span>
        <span class="tag is-white is-large"
          ><a :href="resource.catalogue">Prestations</a></span
        >
      </div>
    </div>

    
    <div v-if="resource.description != ''">
      <hr><i><p class="body" v-html="resource.description"></p></i>
    </div>

  </div>
</template>

<script>
import MapMarkerIcon from "vue-material-design-icons/MapMarker.vue";
import WebIcon from "vue-material-design-icons/Web.vue";
import PhoneIcon from "vue-material-design-icons/Phone.vue";
import EmailIcon from "vue-material-design-icons/Email.vue";
import ClockIcon from "vue-material-design-icons/Clock.vue";
import CashIcon from "vue-material-design-icons/CashMultiple.vue";

export default {
  name: "MoreInfo",
  props: {
    resource: Object,
  },
  components: {
    MapMarkerIcon,
    EmailIcon,
    PhoneIcon,
    ClockIcon,
    WebIcon,
    CashIcon
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.description {
  overflow: auto;
  max-height: 100px;
  
}
</style>
