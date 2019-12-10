<template>
  <div class="container">
    <div class="article section columns">
        <div class="column is-8 is-offset-2">
      <article>
        <header>
          <h1 class="is-1">{{ post.title }}</h1>
          <h2 class="is-2">{{ post.subtitle }}</h2>
          <img v-lazy="post.image" class="" alt="" />
          <p class="resume">{{ post.resume }}</p>
        </header>
        <div class="content">{{ post.content }}</div>
      </article>
      </div>
    </div>
  </div>
</template>

<script>
import { servicePosts } from '~/services/Posts'
export default {
  async asyncData({ params }) {
    return {
      post: await servicePosts.getPostFromDB(params.slug)
    }
  }
}
</script>
