import { mount } from '@vue/test-utils'
import LogoCactus from '@/components/LogoCactus.vue'

describe('LogoCactus test', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(LogoCactus)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
