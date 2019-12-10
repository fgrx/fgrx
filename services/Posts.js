import { fireDB } from '~/plugins/firebase.js'

const servicePosts = {
  getPostsFromDB: async (numberOfPosts = null) => {
    let refPosts = fireDB.collection('posts').orderBy('date', 'desc')
    if (numberOfPosts) refPosts.limit(numberOfPosts)

    const postsCollection = await refPosts.get()
    const posts = []

    postsCollection.forEach((postItem) => {
      const postData = postItem.data()
      posts.push(servicePosts.buildPostFromData(postData))
    })

    return posts
  },
  getPostFromDB: async (slug) => {
    const refPost = fireDB.collection('posts').where('slug', '==', slug)
    const postsCollection = await refPost.get()

    if (postsCollection.empty) return false

    let post = {}
    postsCollection.forEach((postItem) => {
      post = servicePosts.buildPostFromData(postItem.data())
    })
    return post
  },
  buildPostFromData(postData) {
    return {
      title: postData.title,
      slug: postData.slug,
      date: postData.date,
      resume: postData.resume,
      subtitle: postData.subtitle,
      content: postData.content,
      image: postData.image
    }
  }
}

export { servicePosts }
