import { fireDB } from '~/plugins/firebase.js'

const serviceGeneralInfos = {
  getGeneralInfosFromDB: async () => {
    const refInfosBlog = fireDB.collection('Home').doc('infosBlog')
    const dataFromDb = await refInfosBlog.get();
    const siteInfos=dataFromDb.data();

    return {
      title1: siteInfos.title1,
      title2: siteInfos.title2,
      title3: siteInfos.title3,
      email: siteInfos.email,
      phone: siteInfos.phone,
      linkedin: siteInfos.linkedin,
      presentation:siteInfos.presentation,
      imagePresentation:siteInfos.imagePresentation
    }
  }
}

export { serviceGeneralInfos }
