import { mount } from '@vue/test-utils'
import Football from '@/components/Football.vue'

describe('Football.vue', () => {
  it('renders button avvia', () => {

    const wrapper = mount(Football)
    const button = wrapper.get('[data-test="buttonAvvia"]')
    expect(button.text()).toContain('Avvia')
  })

})