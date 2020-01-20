import { fireDB } from '~/plugins/firebase.js'

const servicePosts = {
  getPostsFromDB: async (numberOfPosts = null) => {
    if (numberOfPosts) {
      var refPosts = fireDB
        .collection('posts')
        .where('published', '==', true)
        .orderBy('date', 'desc')
        .limit(numberOfPosts)
    } else {
      var refPosts = fireDB
        .collection('posts')
        .where('published', '==', true)
        .orderBy('date', 'desc')
    }

    const postsCollection = await refPosts.get()
    const posts = []

    postsCollection.forEach((postItem) => {
      const postData = postItem.data()
      let post = servicePosts.buildPostFromData(postData)
      post.image = post.image.replace('upload/', 'upload/w_500/')
      post.image = post.image.replace('.jpg', '.webp').replace('.png', '.webp')
      posts.push(post)
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
      post.image = post.image
        .replace('upload/', 'upload/w_800/')
        .replace('.jpg', '.webp')
        .replace('.png', '.webp')
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
  },
  resizeImageInPost(post) {
    return post.image.replace('uploads/', 'uploads/w_800/')
  }
}

export { servicePosts }
