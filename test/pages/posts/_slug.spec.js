import { mount } from '@vue/test-utils'
import Post from '@/pages/posts/index.vue'

describe('Test of a post', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Post)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
