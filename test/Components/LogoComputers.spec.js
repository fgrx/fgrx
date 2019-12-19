import { mount } from '@vue/test-utils'
import LogoComputers from '@/components/LogoComputers.vue'

describe('LogoComputers test', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(LogoComputers)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
