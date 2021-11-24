import { mount } from '@vue/test-utils'
import Home from '@/components/Home.vue'

describe('Home.vue', () => {
  it('renders button football', () => {

    const wrapper = mount(Home)
    const button = wrapper.get('[data-test="buttonFootball"]')
    expect(button.text()).toContain('Dati Football')
  })

  it('renders button weather', () => {

    const wrapper = mount(Home)
    const button = wrapper.get('[data-test="buttonWeather"]')
    expect(button.text()).toContain('Dati Meteo')
  })
})