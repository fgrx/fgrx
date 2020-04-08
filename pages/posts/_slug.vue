<template>
  <section class="section post-article">
    <div class="container">
      <div class="article columns">
        <article>
          <header>
            <div class="column is-8 is-offset-2">
              <h1 class="is-1">{{ post.title }}</h1>
              <p class="is-3 is-family-sans-serif ">{{ post.subtitle }}</p>
            </div>
            <div class="column is-10 is-offset-1 centered">
              <img v-lazy="post.image" class="" alt="" />
            </div>
          </header>

          <div class="article-content column is-8 is-offset-2">
            <p class="resume">{{ post.resume }}</p>
            <div class="content" v-html="post.content"></div>
          </div>
        </article>
      </div>
      <div class="columns">
        <div class="column is-8 is-offset-2">
          <h2>Commentaires</h2>
          <div class="comments">
            <vue-disqus shortname="fgrx"></vue-disqus>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { servicePosts } from '~/services/Posts'
export default {
  head() {
    let title = this.post.title
    if (this.post.subtitle) title += ' - ' + this.post.subtitle
    let resume = this.post.resume
    return {
      title: title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.resume
        }
      ]
    }
  },
  async asyncData({ params, error }) {
    const post = await servicePosts.getPostFromDB(params.slug)

    if (!post) {
      console.log('error')
      error({ statusCode: 404, message: 'Page non trouvée.' })
    }
    return {
      post
    }
  }
}
</script>

<style scoped></style>
