<template>
  <div class="">
    <nav
      class="navbar is-fixed-top is-black"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container">
        <div class="navbar-brand">
          <nuxt-link to="/">
            <span class="title1-part1">Fabien Grignoux</span><br />
            <span class="title1-part2">Développeur Fullstack à Lyon</span>
          </nuxt-link>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu is-black">
          <div class="navbar-end">
            <nuxt-link to="/" class="navbar-item">
              Accueil
            </nuxt-link>

            <nuxt-link to="/posts" class="navbar-item">
              Articles
            </nuxt-link>

            <nuxt-link to="/portfolio" class="navbar-item">
              Portfolio
            </nuxt-link>

            <nuxt-link to="/#home-presentation" class="navbar-item">
              Présentation
            </nuxt-link>

            <nuxt-link to="/#home-contact" class="navbar-item">
              Contact
            </nuxt-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  mounted() {
    if (process.client) {
      let burger = document.querySelector('.burger')
      let nav = document.querySelector('#' + burger.dataset.target)

      burger.addEventListener('click', function() {
        burger.classList.toggle('is-active')
        nav.classList.toggle('is-active')
      })

      document.addEventListener(
        'click',
        function(event) {
          if (!event.target.matches('.navbar-item')) return
          burger.classList.toggle('is-active')
          nav.classList.toggle('is-active')
        },
        false
      )
    }
  }
}
</script>

<style scoped></style>
