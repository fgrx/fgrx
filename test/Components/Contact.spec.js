import { mount } from '@vue/test-utils'
import Contact from '@/components/Contact.vue'

describe('Contact', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Contact)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
