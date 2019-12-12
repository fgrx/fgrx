<template>
  <div >
    <client-only> 
    <NavBar />
    </client-only>
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import Footer from '~/components/Footer.vue'


export default {
  components: {
    Footer,
    NavBar
  },
  head: {
    bodyAttrs: {
      class: 'has-navbar-fixed-top'
    }
  }
}
</script>

<style></style>
