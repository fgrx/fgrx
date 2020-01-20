import { fireDB } from '~/plugins/firebase.js'

const servicePortfolio = {
  getPortfolioFromDB: async (numberOfProjects) => {
    let projects = []

    const refProjects = fireDB
      .collection('portfolio')
      .orderBy('rank', 'desc')
      .limit(numberOfProjects)
    const projectsCollection = await refProjects.get()

    projectsCollection.forEach((project) => {
      projects.push({
        title: project.data().title,
        description: project.data().description,
        url: project.data().url,
        github: project.data().github,
        tech: project.data().tech,
        image: project
          .data()
          .image.replace('upload/', 'upload/w_500/')
          .replace('.jpg', '.webp')
          .replace('.png', '.webp')
      })
    })

    return projects
  }
}

export { servicePortfolio }
