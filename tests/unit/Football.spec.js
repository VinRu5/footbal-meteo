import { mount } from '@vue/test-utils'
import Football from '@/components/Football.vue'

describe('Football.vue', () => {
  it('should set text', async () => {

    const wrapper = mount(Football)

    //mi aspetto che text sia vuoto
    expect(wrapper.vm.text).toBe('');

    //simulo il settaggio di text
    await wrapper.setData({ text: 'test data' });

    //mi aspetto che il valore di text cambi
    expect(wrapper.vm.text).toBe('test data');
  })

  it('should computed teams', async () => {

    const wrapper = mount(Football);

    //setto il data
    await wrapper.setData({ text: "lista numerata \n 1.   Liverpool  34  32  45 22  5  3 5" });

    //mi aspetto che team sia calcolato
    expect(wrapper.vm.teams).toStrictEqual([
      {
        id: 1,
        name: 'Liverpool',
        totalMatch: 34,
        win: 32,
        loser: 45,
        draw: 22,
        scoredGoals: 5,
        concededGoals: 3,
        points: 5,
      }
    ]
    );
  })

  it('test showTeam', async ()=> {
    const wrapper = mount(Football);
    
    //mi prendo il button collegato alla funzione
    const button = wrapper.get('[data-test="buttonAvvia"]');

    //setto text/team vuoto
    await wrapper.setData({ text: '' });
    await wrapper.vm.teams;

    //trigger sul button
    await button.trigger('click');

    //mi aspetto winnerTeams vuoto
    expect(wrapper.vm.winnerTeam).toEqual({});

    //setto text/team conun valore
    await wrapper.setData({ text: "lista numerata \n 1.   Liverpool  34  32  45 22  5  3 5" });
    await wrapper.vm.teams;

    //trigger sul button
    await button.trigger('click');

    //mi aspetto winnerTeams con il valore passato
    expect(wrapper.vm.winnerTeam).toEqual({
      id: 1,
      name: 'Liverpool',
      totalMatch: 34,
      win: 32,
      loser: 45,
      draw: 22,
      scoredGoals: 5,
      concededGoals: 3,
      points: 5,
    });
  })

})