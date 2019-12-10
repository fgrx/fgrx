import { fireDB } from '~/plugins/firebase.js'

const servicePosts = {
  getPostsFromDB: async (numberOfPosts = null) => {
    let refPosts = fireDB.collection('posts').orderBy('date', 'desc')
    if (numberOfPosts) refPosts.limit(numberOfPosts)

    const postsCollection = await refPosts.get()
    const posts = []

    postsCollection.forEach((postItem) => {
      const postData = postItem.data()
      let post = servicePosts.buildPostFromData(postData)
      post.image = post.image.replace("upload/","upload/w_500/")
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
      post.image = post.image.replace("upload/","upload/w_800/")
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
  resizeImageInPost(post,size){
    return post.image.replace("uploads/","uploads/w_800/")
  }
}

export { servicePosts }
