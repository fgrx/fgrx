<template>
  <div class="listPage portfolioList ">
    <div class="container">
      <section class="section">
        <div class="columns">
          <div class="column is-8">
            <h1 class="is-1">Portfolio complet</h1>
            <p>
              Voici quelques projets sur lesquels j'ai pu travailler durant ma
              carrière.
            </p>
          </div>
        </div>
        <portfolio
          v-if="portfolioProjects.length"
          v-bind:projects="portfolioProjects"
        />
      </section>
    </div>
  </div>
</template>

<script>
import Portfolio from '~/components/Portfolio.vue'

import { serviceGeneralInfos } from '~/services/GeneralInfos.js'
import { servicePortfolio } from '~/services/Portfolio'

export default {
  data() {
    return {
      siteInfos: this.siteInfos,
      portfolioProjects: this.portfolioProjects
    }
  },
  components: {
    Portfolio
  },
  head() {
    return {
      title: 'Fabien Grignoux - Liste des articles',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Portfolio complet. Projets réalisés en Angular, Vue.js, Symfony, Node.js, PHP et Ionic'
        }
      ]
    }
  },
  async asyncData({ params }) {
    //Rappel : Utilisation de asyncData pour le ssr. Pas de this possible donc utilisation de services
    const numberOfProjectsToDisplay = 30
    return {
      portfolioProjects: await servicePortfolio.getPortfolioFromDB(
        numberOfProjectsToDisplay
      ),
      siteInfos: await serviceGeneralInfos.getGeneralInfosFromDB()
    }
  }
}
</script>
