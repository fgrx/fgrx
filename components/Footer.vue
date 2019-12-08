<template>
  <footer class='general-footer'>
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column ">
            <p>
              <span class="title1-part1">{{ siteInfos.title1 }}</span><br />
              <span class="title1-part2">{{ siteInfos.title2 }}</span>
            </p>
          </div>
          <div class="column">
            <div class="buttons">
              <a
                target="_blank"
                class="button  is-outlined"
                v-if="siteInfos.linkedin"
                :href="siteInfos.linkedin"
                ><font-awesome-icon :icon="['fab', 'linkedin']" /> linkedIn</a
              ><br />
              <a
                target="_blank"
                class="button is-outlined"
                :href="'mailto:'+siteInfos.email"
                v-if="siteInfos.email"
                ><font-awesome-icon :icon="['fas', 'envelope']" /> {{ siteInfos.email }}</a
              ><br />
              <a v-if="siteInfos.phone" class="button is-outlined" :href="'phone:' + siteInfos.phone"
                ><font-awesome-icon :icon="['fas', 'phone']" />
                {{ siteInfos.phone }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props:['siteInfos'],
  mounted() {}
}
</script>

<style></style>
