<template>
  <div class="homepage">
    <section>
      <div class="home-top">
        <div class="content-home-top ">
          <div class="inner-home">
            <div class="container">
              <h1 class="title">
                <span class="title1-part1">{{ siteInfos.title1 }}</span
                ><br /><span class="title1-part2">{{ siteInfos.title2 }}</span>
              </h1>
              <h2 class="title3" v-if="siteInfos.title3">
                <font-awesome-icon :icon="['fas', 'heart']" />
                {{ siteInfos.title3 }}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="postsHome section">
        <div class="container">
          <div class="columns">
            <div class="column whatfor-item whatfor-item1">
              <p class="title3 title is-3">Applications sur mesure</p>
              <p>
                Je conçois et réalise des applications métier pour les besoins
                spécifiques à votre entreprise. Je peux m'intégrer dans vos
                équipes sur un pojet déjà existant.
              </p>
            </div>
            <div class="is-divider-vertical"></div>
            <div class="column whatfor-item whatfor-item2">
              <p class="title3 title is-3">Sites internet</p>
              <p>
                Votre entreprise a besoin d'un nouveau site internet ou
                d'étendre les fonctionnalités d'un site existant ? Pas de
                problème ! Je propose des solutions clefs en main que vous
                pourrez gérer vous même.
              </p>
            </div>
            <div class="is-divider-vertical"></div>
            <div class="column whatfor-item whatfor-item3">
              <p class="title3 title is-3">Applications mobiles</p>
              <p>
                Je développe des applications mobiles disponible en utilisant
                des outils de création multiplateforme. Comment ? En utilisant
                les frameworks Angular &amp; Ionic
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="section home-presentation">
        <div class="container">
          <h2 class="is-2">Présentation</h2>
          <div class="columns">
            <div class="column is-6">
              {{ siteInfos.presentation }}
            </div>
            <div class="is-3-desktop column is-6-mobile centered is-offset-1">
              <img
                v-lazy="siteInfos.imagePresentation"
                class="imagePresentation"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="section home-items">
        <div class="container">
          <h2 class="is-2">Mes compétences</h2>
          <Items v-if="items.length" v-bind:items="items" />
        </div>
      </div>
    </section>

    <section>
      <div class="section home-realisations">
        <div class="container">
          <h2 class="is-2">Portfolio</h2>
          <portfolio
            v-if="portfolioProjects.length"
            v-bind:projects="portfolioProjects"
          />
        </div>
      </div>
    </section>

    <section>
      <div class="section home-contact">
        <contact />
      </div>
    </section>

    <Footer v-bind:siteInfos="siteInfos" />

    <CookieControl locale='fr' />
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { servicePortfolio } from '~/services/Portfolio.js'
import { serviceItems } from '~/services/Items.js'
import { serviceGeneralInfos } from '~/services/GeneralInfos.js'

import Footer from '~/components/Footer.vue'
import Portfolio from '~/components/Portfolio.vue'
import Items from '~/components/Items.vue'
import Contact from '~/components/Contact.vue'

export default {
  components: {
    Footer,
    Portfolio,
    Items,
    Contact,
    fontawesome: {
      imports: [
        {
          set: '@fortawesome/pro-regular-svg-icons',
          icons: ['faAdjust']
        },
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        }
      ]
    }
  },
  head () {
    return {
      title: 'Fabien Grignoux - Développeur fullstack freelance à Lyon',
      meta: [
        { hid: 'description', name: 'description', content: "Développeur d'applications web et mobile sur les technologies Vuejs, Angular et Symfony" }
      ]
    }
  },
  async asyncData({ params }) {
    //Rappel : Utilisation de asyncData pour le ssr. Pas de this possible donc utilisation de services
    const numberOfPosts = 4
    const numberOfProjectsToDisplay = 6
    return {
      siteInfos: await serviceGeneralInfos.getGeneralInfosFromDB(),
      posts: {},
      portfolioProjects: await servicePortfolio.getPortfolioFromDB(
        numberOfProjectsToDisplay
      ),
      items: await serviceItems.getItemsFromDB()
    }
  },
  mounted(){
    
  }
}
</script>

<style></style>
