import { mount } from '@vue/test-utils'
import Portfolio from '@/components/Portfolio.vue'

describe('Portfolio ', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Portfolio)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
