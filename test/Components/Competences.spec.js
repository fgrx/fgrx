import { mount } from '@vue/test-utils'
import Competences from '@/components/Competences.vue'

describe('Competences', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Competences)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
