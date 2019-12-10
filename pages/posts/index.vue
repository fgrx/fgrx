<template>
  <div class='content'>
    <div class="container">
      <section class='section'>
        <h1 class="is-1">Tous les articles</h1>
        <posts v-bind:posts="posts" />
      </section>
    </div>
  </div>
</template>

<script>
import Posts from '~/components/Posts.vue'

import { serviceGeneralInfos } from '~/services/GeneralInfos.js'
import { servicePosts } from '~/services/Posts.js'

export default {
  components: {
    Posts,
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
