import { fireDB } from '~/plugins/firebase.js'

const serviceCompetences = {
  getCompetencesFromDB: async () => {
    const refCompetences = fireDB.collection('items').orderBy('rank')
    const competencesCollection = await refCompetences.get()

    const competences = []

    competencesCollection.forEach((item) => {
      competences.push({
        title: item.data().title,
        image: item.data().image,
        rank: item.data().rank
      })
    })

    return competences
  }
}

export { serviceCompetences }
