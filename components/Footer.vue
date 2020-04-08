<template>
  <footer class="general-footer">
    <div class="section">
      <div class="container">
        <h2 class="title is-2">Contact</h2>
        <p>
          <a
            target="_blank"
            class="button  is-outlined is-medium footer-link"
            v-if="siteInfos.linkedin"
            :href="siteInfos.linkedin"
            ><font-awesome-icon :icon="['fab', 'linkedin']" /> linkedIn</a
          >
          <a
            target="_blank"
            class="button is-outlined is-medium footer-link"
            :href="'mailto:' + siteInfos.email"
            v-if="siteInfos.email"
            ><font-awesome-icon :icon="['fas', 'envelope']" />
            {{ siteInfos.email }}</a
          >
        </p>
      </div>
    </div>
    <div class="end"></div>
  </footer>
</template>

<script>
import { serviceGeneralInfos } from '~/services/GeneralInfos.js'
export default {
  data() {
    return {
      siteInfos: {}
    }
  },
  async beforeMount() {
    this.siteInfos = await serviceGeneralInfos.getGeneralInfosFromDB()
  }
}
</script>

<style scoped>
h2 {
  color: white;
  font-weight: normal;
}

.footer-link {
  margin-right: 1em;
}
</style>
