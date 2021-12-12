import { mount } from '@vue/test-utils'
import Home from '@/components/Home.vue'

describe('Home.vue', () => {
  it('emitted button football', () => {

    const wrapper = mount(Home)

    //qui verifico che il componente sia montato
    expect(wrapper.exists()).toBeTruthy();
    
    wrapper.vm.$emit('viewFootball');//qui simulo l'emit
    expect(wrapper.emitted().viewFootball).toBeTruthy(); //qui mi aspetto che venga eseguito l'emit
    

  })

  it('renders button weather', () => {

    const wrapper = mount(Home)
    
    //simulo l'emit
    wrapper.vm.$emit('viewWeather');

    //mi aspetto che venga eseguito
    expect(wrapper.emitted().viewWeather).toBeTruthy();
  })
})