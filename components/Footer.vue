<template>
  <footer class="general-footer">
    <div class="section">
      <div class="container">
        <p>Contact :<br />
        
          <a
            target="_blank"
            class="button  is-outlined"
            v-if="siteInfos.linkedin"
            :href="siteInfos.linkedin"
            ><font-awesome-icon :icon="['fab', 'linkedin']" /> linkedIn</a
          >
          <a
            target="_blank"
            class="button is-outlined"
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

<style></style>
