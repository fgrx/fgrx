import { mount } from '@vue/test-utils'
import NavBar from '@/components/NavBar.vue'

describe('Navigation bar', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(NavBar)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
