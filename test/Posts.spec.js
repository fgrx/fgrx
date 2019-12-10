import { servicePosts } from '../services/Posts.js'

test("Service get posts",async()=>{
    const posts = await  servicePosts.getPostsFromDB(2);
    expect(posts.length).toBe(2);
})

test("get post that doesn't exist",async()=>{
    const slug= "oiondoidddsf";
    const post= await servicePosts.getPostFromDB(slug);
    expect(post).toBe(false);
});

test('get post informations',async()=>{
    const slug= "clean-code-part2";
    const post= await servicePosts.getPostFromDB(slug);
    expect(post.slug).toBe(slug);
});