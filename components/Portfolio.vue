<template>
  <div class="portfolio columns is-multiline">
    <div
      v-for="(project, index) in projects"
      class="item-portfolio column is-one-third"
    >
      <div class="card">
        <div v-if="project.image" class="card-image">
          <figure class="image ">
            <img v-lazy="project.image" alt="" /> 
          </figure>
        </div>
        <div class="card-content">
          <p class="title is-4">{{ project.title }}</p>
          <p>{{ project.description }}</p>
          <p class="projectTech">Technos : {{ project.tech }}</p>
        </div>
        <footer class="card-footer">
          <p v-if="project.url" class="card-footer-item">
            <a :href="project.url"
              ><font-awesome-icon icon="link" /> Voir en ligne</a
            >
          </p>
          <p v-if="project.github" class="card-footer-item">
            <a :href="project.github"
              ><font-awesome-icon :icon="['fab', 'github']" /> GitHub</a
            >
          </p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  props: ['projects'],
  mounted() {}
}
</script>
