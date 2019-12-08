import { fireDB } from '~/plugins/firebase.js'

const serviceItems = {
  getItemsFromDB: async () => {
    const refItems = fireDB.collection('items').orderBy('rank')
    const itemsCollection = await refItems.get()

    const items = []

    itemsCollection.forEach((item) => {
      items.push({
        title: item.data().title,
        image: item.data().image,
        rank: item.data().rank
      })
    })

    return items
  }
}

export { serviceItems }
