<template>
  <div class="homepage">
    <section>
      <div class="home-top">
        <div class="content-home-top ">
          <div class="inner-home section">
            <div class="container">
              <div class="columns">
                <div class="column is-two-third">
                  <h1 class="title">
                    <span class="title1-part1">{{ siteInfos.title1 }}</span>
                    <br />
                    <span class="title1-part2">{{ siteInfos.title2 }}</span>
                  </h1>
                  <h2 class="title3" v-if="siteInfos.title3">
                    <font-awesome-icon :icon="['fas', 'heart']" />
                    {{ siteInfos.title3 }}
                  </h2>
                </div>
                <div class="column image-right is-hidden-mobile"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="home-articles">
      <div class="postsHome section">
        <div class="container">
          <h2 class="is-2">Derniers articles</h2>
          <posts v-bind:posts="posts" />
          <p class="see-all">
            <nuxt-link :to="{ path: 'posts' }" class="button "
              ><font-awesome-icon :icon="['fas', 'plus']" /> Voir tous les
              articles</nuxt-link
            >
          </p>
        </div>
      </div>
    </section>

    <section id="home-presentation">
      <div class="section home-presentation">
        <div class="container">
          <h2 class="is-2">Présentation</h2>
          <div class="columns">
            <div class="column is-6">
              {{ siteInfos.presentation }}
            </div>
            <div class="is-6-desktop column centered ">
              <!--
              <img
                v-lazy="siteInfos.imagePresentation"
                class="imagePresentation"
                alt=""
              />-->
              <client-only>
                <LogoComputers />
              </client-only>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="home-competences">
      <div class="section home-items">
        <div class="container">
          <h2 class="is-2">Mes compétences</h2>
          <Competences
            v-if="competences.length"
            v-bind:competences="competences"
          />
        </div>
      </div>
    </section>

    <section id="home-portfolio">
      <div class="section home-realisations">
        <div class="container">
          <h2 class="is-2">Portfolio</h2>
          <portfolio
            v-if="portfolioProjects.length"
            v-bind:projects="portfolioProjects"
          />
          <p class="see-all">
            <nuxt-link :to="{ path: 'portfolio' }" class="button "
              ><font-awesome-icon :icon="['fas', 'plus']" /> Voir plus de
              projets</nuxt-link
            >
          </p>
        </div>
      </div>
    </section>

    <section id="home-contact">
      <div class="section home-contact">
        <contact v-bind:siteInfos="siteInfos" />
      </div>
    </section>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { servicePortfolio } from '~/services/Portfolio.js'
import { serviceCompetences } from '~/services/Competences.js'
import { serviceGeneralInfos } from '~/services/GeneralInfos.js'
import { servicePosts } from '~/services/Posts.js'

import Portfolio from '~/components/Portfolio.vue'
import Competences from '~/components/Competences.vue'
import Contact from '~/components/Contact.vue'
import Posts from '~/components/Posts.vue'
import LogoComputers from '~/components/LogoComputers.vue'

export default {
  components: {
    Portfolio,
    Competences,
    Contact,
    Posts,
    LogoComputers,
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
  head() {
    return {
      title: this.siteInfos.title1 + ' - ' + this.siteInfos.title2,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.siteInfos.description
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.siteInfos.title1 + ' - ' + this.siteInfos.title2
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://developpeurfullstack.fr'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.siteInfos.description
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://developpeurfullstack.fr/ogimage.jpg'
        }
      ]
    }
  },
  jsonld() {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      creator: 'Fabien Grignoux',
      author: 'Fabien Grignoux',
      url: 'https://developpeurfullstack.fr',
      about:
        'Développement web Javascript, Vue.js, Nuxt, Angular et Php/Symfony',
      contentLocation: 'Lyon France',
      inLanguage: 'fr',
      keywords:
        'Javascript, développeur, fullstrack, lyon, php, symfony, vue.js,angular'
    }
  },
  data() {
    return {
      siteInfos: this.siteInfos,
      posts: this.posts,
      portfolioProjects: this.portfolioProjects,
      competences: this.competences
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
      competences: await serviceCompetences.getCompetencesFromDB(),
      posts: await servicePosts.getPostsFromDB(2)
    }
  },
  mounted() {}
}
</script>

<style></style>
