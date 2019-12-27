<template>
  <div class='listPage postList'>
    <div class="container">
      <section class='section'>
        <div class="columns">
          <div class="column is-8">
            <h1 class="is-1">Tous les articles</h1>
          </div>
        </div>
        <posts v-bind:posts="posts" />
      </section>
    </div>
  </div>
</template>

<script>
import Posts from '~/components/Posts.vue'

import { serviceGeneralInfos } from '~/services/GeneralInfos.js'
import { servicePosts } from '~/services/Posts.js'

import LogoCactus from '~/components/LogoCactus.vue'

export default {
  data(){
    return{
      siteInfos:this.siteInfos,
      posts:this.posts
    }
  },
  components: {
    Posts,
    LogoCactus
  },
  head() {
    return {
      title: 'Fabien Grignoux - Liste des articles',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Liste des articles '
        }
      ]
    }
  },
  async asyncData({ params }) {
    //Rappel : Utilisation de asyncData pour le ssr. Pas de this possible donc utilisation de services
    return {
      posts: await servicePosts.getPostsFromDB(),
      siteInfos: await serviceGeneralInfos.getGeneralInfosFromDB()
    }
  }
}
</script>
