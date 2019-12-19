import { mount } from '@vue/test-utils'
import Posts from '@/components/Posts.vue'

describe('Posts', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Posts)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
