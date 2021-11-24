import { mount } from '@vue/test-utils'
import Weather from '@/components/Weather.vue'

describe('Weather.vue', () => {
  it('renders button avvia', () => {

    const wrapper = mount(Weather)
    const button = wrapper.get('[data-test="buttonAvvia"]')
    expect(button.text()).toContain('Avvia')
  })

})