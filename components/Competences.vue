<template>
  <div class="columns items is-mobile is-multiline">
    <div
      class="column is-half-mobile"
      v-for="(competence, index) in competences"
    >
      <div data-aos="zoom-in" :data-aos-delay="100*index">
        <span class="image-item"
          ><font-awesome-icon :icon="['fab', competence.image]"
        /></span>
        <br />
        {{ competence.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ['competences'],
  mounted() {}
}
</script>
