<template>
<div class=''>
  <div class="columns is-multiline">
    <div class="column is-half" v-for="(post,index) in posts">
      <div :class=" {'fadeInLeft animated faster': index % 2 === 0, 'fadeInRight animated faster': index % 2 !== 0 }" >
      <nuxt-link :to="{ name : 'posts-slug', params : {slug : post.slug} }">
        <div class="publication">
          <div class="publication-image">
            <img v-lazy="post.image" class="" alt="">
          </div>
          
          <div class="publication-titre">
              <h2 class="title is-3">{{ post.title }}</h2>
              <p v-if="post.subtitle" class="subtitle is-4">{{ post.subtitle }}</p>
          </div>
        </div>
      </nuxt-link>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  props:['posts'],
  mounted(){
  }
}
</script>

<style scoped>
.posts-list{
margin-bottom:2em;
}
</style>