import { fireDB } from '~/plugins/firebase.js'

const servicePortfolio = {
  getPortfolioFromDB: async (numberOfProjects) => {
    let projects = []

    const refProjects = fireDB.collection('portfolio').orderBy('rank',"asc").limit(numberOfProjects)
    const projectsCollection = await refProjects.get()

    projectsCollection.forEach((project) => {
      projects.push({
        title: project.data().title,
        description: project.data().description,
        url: project.data().url,
        github: project.data().github,
        tech: project.data().tech,
        image: project.data().image
      })
    })

    return projects
  }
}

export { servicePortfolio }
