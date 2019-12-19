import { mount } from '@vue/test-utils'
import index from '@/pages/posts/index.vue'

describe('Posts index', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(index)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
