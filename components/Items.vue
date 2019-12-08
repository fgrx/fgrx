<template>
  <div class="columns items is-mobile is-multiline">
    <div class="column is-half-mobile" v-for="(item,index) in items">
      <span class='image-item'><font-awesome-icon :icon="['fab', item.image]" /></span>
       <br />
      {{ item.title }}
    </div>
  </div>
</template>


<script>
export default {
  components: {},
  props: ['items'],
  mounted() {}
}
</script>